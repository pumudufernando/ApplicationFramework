import React, { Component } from 'react';
import axios from 'axios';
import LectureTableRow from "./LectureTableRow";

export default class LectureIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {lectured: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/lectures')
            .then(response => {
                this.setState({ lectured: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.lectured.map(function(object, i){
            return <LectureTableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Courses List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Lecture Id</th>
                        <th>Lecture Name</th>
                        <th>Type</th>
                        <th>Lecture Details</th>
                        <th>Faculty</th>
                        <th>Password</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        );
    }
}