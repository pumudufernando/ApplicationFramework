import React, { Component } from 'react';
import axios from 'axios';


class View extends Component {


    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.sendx = this.sendx.bind(this);

        this.state = {
            courseno:'',
            coursename:'',
            credits:'',
            coursedetails:'',
            instructor:''
        }

    }

  /*  componentDidMount() {

        axios.get('http://localhost:4000/approves'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    person_name: response.data.courseno,
                    coursename: response.data.coursename,
                    credits: response.data.credits,
                    coursedetails: response.data.coursedetails,
                    instructors: response.data.instructors});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
*/

    delete() {
        axios.get('http://localhost:4000/approves/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }

    sendx(e){

        const obj = {
            courseno: this.props.obj.courseno,
            coursename: this.props.obj.coursename,
            credits: this.props.obj.credits,
            coursedetails:this.props.obj.coursedetails,
            instructor:this.props.obj.instructor

        };
      // alert(this.props.obj.courseno);
      //   alert(this.props.obj.coursename);
      //   alert(this.props.obj.credits);
      //   alert(this.props.obj.coursedetails);
      //   alert(this.props.obj.instructor);
      //   alert(this.props.obj._id);

        //console.log("gygy");
        //alert(obj);

        axios.post('http://localhost:4000/courses/add/',obj)
            .then(res=> console.log(res.data));

        this.delete();
    }

    render() {


        return (
            <tr>
                <td>
                    {this.props.obj.courseno}
                </td>
                <td>
                    {this.props.obj.coursename}
                </td>
                <td>
                    {this.props.obj.credits}
                </td>
                <td>
                    {this.props.obj.coursedetails}
                </td>
                <td>
                    {this.props.obj.instructor}
                </td>
                <td>
                    <button onClick={this.sendx} id = {this.props.obj._id} className="btn btn-danger">Accept</button>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Decline</button>
                </td>

            </tr>
        );
    }
}

export default View;