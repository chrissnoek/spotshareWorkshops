/* globals React */
/* eslint "react/jsx-no-undef":"off" */

import React, { Component } from "react";
import WorkshopFilter from './WorkshopFilter.jsx';
import WorkshopAdd from './WorkshopAdd.jsx';
import WorkshopCarousel from './WorkshopCarousel.jsx';
import graphQLFetch from './graphQLFetch.js';


export default class WorkshopList extends React.Component {
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