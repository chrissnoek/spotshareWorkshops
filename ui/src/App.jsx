import React, { Component } from "react";
import http from "../src/services/httpService";
import "./css/style.scss";

// const initialPhotos = [
//   {
//     id: 8046,
//     memberId: 4790,
//     locationId: 2289,
//     eventId: 1,
//     created: new Date("2018-08-15"),
//     title: "I love Zeeland",
//     description: "I love Zeeland",
//     date: new Date("2019-09-24T19:00:26"),
//     likes: 10,
//     likesThisWeek: 1,
//     exif: {
//       brand: "Canon",
//       apeture: "16",
//       shutterspeed: "8/1",
//       ISO: "100",
//       camera: "Canon EOS 6D Mark II"
//     },
//     image: {
//       imageSmall: "",
//       imageLarge: "",
//       imageThumbnail: ""
//     }
//   },
//   {
//     id: 8047,
//     memberId: 4790,
//     locationId: 2289,
//     eventId: 1,
//     created: new Date("2018-08-15"),
//     title: "I love Zeeland",
//     description: "I love Zeeland",
//     date: new Date("2019-09-24T19:00:26"),
//     likes: 10,
//     likesThisWeek: 1,
//     exif: {
//       brand: "Canon",
//       apeture: "16",
//       shutterspeed: "8/1",
//       ISO: "100",
//       camera: "Canon EOS 6D Mark III"
//     },
//     image: {
//       imageSmall: "",
//       imageLarge: "",
//       imageThumbnail: ""
//     }
//   }
// ];

// a regex to see if a value is a date
const dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

// a reviver to pass to the JSON parse function in fetchdata() to return the isoString to a date type
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

class WorkshopFilter extends React.Component {
  //asdf
  render() {
    return <div>This is a placholder for the WorkshopFilter</div>;
  }
}

function WorkshopView(props) {
  const workshop = props.workshop;
  console.log(workshop);
  return (
    <React.Fragment>
      <div className="workshopCard rounded relative overflow-hidden my-2">
        <div className="relative rounded">
          <a
            href="#"
            className="absolute w-full h-full z-10"
            title="Bekijk foto Roermond oude stad van Adelheid- smitt"
          ></a>
          <img
            src={workshop.images.imageWatermark}
            className="object-cover  w-full h-48  block"
            alt="Foto Roermond oude stad van Adelheid- smitt"
          />

          <div className="workshopContent p-4 absolute bottom-0 left-0">
            <span className="text-white">
              {// convert date type to a readable date string
              workshop.date.toDateString()}
            </span>
            <div className="workshopInfo">
              <h3 className="text-white">{workshop.title}</h3>
              <span className="text-white">{workshop.place}</span>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function WorkshopCarousel(props) {
  const workshops = props.workshops.map(workshop => (
    <WorkshopView key={workshop.id} workshop={workshop} />
  ));
  return <div>{workshops}</div>;
}

class WorkshopAdd extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleInputChange = e => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.workshopAdd;

    const data = new FormData();
    const uploadedFile = this.fileInput.current.files[0];
    data.append("workshopImage", uploadedFile);

    const { data: resources } = await http.post(
      window.ENV.UI_API_IMAGE_ENDPOINT,
      data
    );
    console.log(resources);
    //0 = thumb, 1 == watermakrk 2 == original
    const imageThumb =
      "https://dkotwt30gflnm.cloudfront.net/" +
      resources.transforms.find(elem => elem.id === "thumbnail").key;
    const imageOriginal =
      "https://dkotwt30gflnm.cloudfront.net/" +
      resources.transforms.find(elem => elem.id === "original").key;
    const imageWatermark =
      "https://dkotwt30gflnm.cloudfront.net/" +
      resources.transforms.find(elem => elem.id === "watermark").key;

    const workshop = {
      title: form.title.value,
      place: form.place.value,
      date: new Date(form.date.value).toISOString(),
      description: form.desc.value,
      images: {
        imageThumb,
        imageOriginal,
        imageWatermark
      }
    };
    this.props.createWorkshop(workshop);
    form.title.value = "";
    form.place.value = "";
    form.date.value = "";
    form.desc.value = "";
  }

  render() {
    return (
      <form
        name="workshopAdd"
        encType="multipart/form-data"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        className="block py-3 px-4 border border-gray-300 rounded"
      >
        <h3 className="my-2">Add workshop</h3>
        <input
          type="text"
          name="title"
          placeholder="Titel"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="text"
          name="place"
          placeholder="Plaats"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="date"
          name="date"
          placeholder="Datum"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="file"
          name="workshopImage"
          ref={this.fileInput}
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="text"
          name="desc"
          placeholder="Beschrijving"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <button className="block px-3 py- my-2 bg-blue-600 text-white rounded text-l">
          Add
        </button>
      </form>
    );
  }
}

async function graphQLFetch(query, variables = {}) {
  try {
    console.log(window.ENV.UI_API_ENDPOINT);
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

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

class WorkshopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      workshops: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      workshopList {
        id
        title
        date
        created
        place
        images {
          imageThumb
          imageOriginal
          imageWatermark
        }
      }
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      console.log(data);
      this.setState({ workshops: data.workshopList });
    }
  }

  createWorkshop = async workshop => {
    // create a mutation query with a variable, which is passed in the body in the fetch
    // first addAWorkshop is just a mutation name, afther is the variable and the type which is workshopinputs
    // next is the actual mutation which is getting the $workshop variable
    // the query should return only the id
    const query = `mutation addAWorkshop($workshop: WorkshopInputs!) {
        workshopAdd(workshop: $workshop) {
          id
        }
    }`;

    const data = await graphQLFetch(query, { workshop });
    if (data) {
      this.loadData();
    }
  };

  render() {
    return (
      <div id="page" className="p-6">
        <h1>Upcoming Workshops</h1>
        <WorkshopFilter />
        <hr></hr>
        <WorkshopCarousel workshops={this.state.workshops} />
        <hr></hr>
        <WorkshopAdd createWorkshop={this.createWorkshop} />
      </div>
    );
  }
}

export default WorkshopPage;
