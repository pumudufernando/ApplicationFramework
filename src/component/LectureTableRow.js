import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class LectureTableRow extends Component {


    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/lectures/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.lecId}
                </td>
                <td>
                    {this.props.obj.lecName}
                </td>
                <td>
                    {this.props.obj.typeOfEmp}
                </td>
                <td>
                    {this.props.obj.lecturedetails}
                </td>
                <td>
                    {this.props.obj.faculty}
                </td>
                <td>
                    {this.props.obj.passwrd}
                </td>
                <td>
                    <Link to={"/lectureedit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default LectureTableRow;