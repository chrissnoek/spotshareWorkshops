import React, { Component } from "react";

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

class WorkshopFilter extends Component {
  //asdf
  render() {
    return <div>This is a placholder for the WorkshopFilter</div>;
  }
}

function WorkshopView(props) {
  const workshop = props.workshop;
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
            src="https://www.spotshare.nl/site/assets/files/8066/eos_6d-8472_roermond.746x746-pim2-thumbhome746.jpg"
            className="object-cover  w-full h-48  block"
            alt="Foto Roermond oude stad van Adelheid- smitt"
          />

          <div className="workshopContent p-4 absolute bottom-0 left-0">
            <span className="text-white">{workshop.date}</span>
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
  console.log(props);
  const workshops = props.workshops.map(workshop => (
    <WorkshopView key={workshop.id} workshop={workshop} />
  ));
  return <div>{workshops}</div>;
}

class WorkshopAdd extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange = e => {
  //   console.log(e, this);

  //   const target = event.target;
  //   console.log(target.value);
  // };

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    const form = document.forms.workshopAdd;

    const workshop = {
      owner: form.owner.value,
      title: form.title.value,
      status: "New"
    };
    this.props.createWorkshop(workshop);
    form.owner.value = "";
    form.title.value = "";
  }
  render() {
    return (
      <form
        name="workshopAdd"
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        className="block py-3 px-4 border border-gray-300 rounded"
      >
        <h3 className="my-2">Add workshop</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="file"
          name="image"
          id="image"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <input
          type="text"
          name="desc"
          placeholder="Descrtiption"
          className="border border-gray-400 bg-gray-200 focus:bg-white text-gray-900 appearance-none inline-block w-full border rounded py-3 px-4 focus:outline-none mb-2"
        />
        <button className="block px-3 py- my-2 bg-blue-600 text-white rounded text-l">
          Add
        </button>
      </form>
    );
  }
}

class WorkshopPage extends Component {
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
        memberId
        title
        date
        created
        place
      }
    }`;

    const response = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });

    const result = await response.json();
    this.setState({ workshops: result.data.workshopList });
  }

  createWorkshop = workshop => {
    // add a unique id to the new issue
    workshop.id = this.state.workshops.length + 1;
    // fill in yet to be filled object fiels of the new issue
    issue.created = new Date();

    //get the current workshop from the state
    const newWorkshops = [...this.state.workshops];

    // push the new created issue to the array
    newWorkshops.push(issue);

    // set the new state with the new photos using object destructuring
    this.setState({ workshops: newWorkshops });
  };

  render() {
    console.log(this.state.workshops);
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
