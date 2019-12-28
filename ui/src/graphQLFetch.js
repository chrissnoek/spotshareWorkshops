
// a regex to see if a value is a date
const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

// a reviver to pass to the JSON parse function in fetchdata() to return the isoString to a date type
function jsonDateReviver(key, value) {
    if (dateRegex.test(value)) return new Date(value);
    return value;
}

export default async function graphQLFetch(query, variables = {}) {
    try {
        console.log(window.ENV.UI_API_ENDPOINT);
        const response = await fetch(window.ENV.UI_API_ENDPOINT, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ query, variables })
        });
        const body = await response.text();
        const result = JSON.parse(body, jsonDateReviver);
        console.log('test123');

        // alert the error message whenthe result is containing erros
        if (result.errors) {
            const error = result.errors[0];
            if (error.extensions.code == "BAD_USER_INPUT") {
                console.log(error);
                const details = error.extensions.exception.errors.join("\n ");
                alert(`${error.message}\n ${details}`);
            } else {
                alert(`${error.extensions.code}\n ${error.message}`);
            }
        }
        return result.data;
    } catch (e) {
        alert(`Error in sending data to server: ${e.message}`);
    }
}