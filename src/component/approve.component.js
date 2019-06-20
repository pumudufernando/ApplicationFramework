import React, { Component } from 'react';
import axios from 'axios';
import View from './view.component';

export default class Approve extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coursed: [],
            name : 'qq'
        };
    }

//+this.state.name

    componentDidMount(){
        axios.get('http://localhost:4000/approves/'+this.state.name)
            .then(response => {
                this.setState({ coursed: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        return this.state.coursed.map(function(object, i){
            return <View obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Courses List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                    <tr>
                        <th>Course No</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                        <th>Details</th>
                        <th>Lectures</th>
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