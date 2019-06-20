import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onClickCourseNo = this.onClickCourseNo.bind(this);
        this.onClickCourseName = this.onClickCourseName.bind(this);
        this.onClickCredits = this.onClickCredits.bind(this);
        this.onClickCourseDetails = this.onClickCourseDetails.bind(this);
        this.onClickInstructors = this.onClickInstructors.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            courseno: '',
            coursename: '',
            credits:'',
            coursedetails:'',
            instructor:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/courses/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    courseno: response.data.courseno,
                    coursename: response.data.coursename,
                    credits: response.data.credits,
                    coursedetails: response.data.coursedetails,
                    instructor: response.data.instructor
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onClickCourseNo(e){
        this.setState({
            courseno : e.target.value
        });
    }

    onClickCourseName(e){
        this.setState({
            coursename : e.target.value
        });
    }


    onClickCredits(e){
        this.setState({
            credits : e.target.value
        });
    }

    onClickCourseDetails(e){
        this.setState({
            coursedetails : e.target.value
        })
    }

    onClickInstructors(e){
        this.setState({
            instructor : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            courseno: this.state.courseno,
            coursename: this.state.coursename,
            credits: this.state.credits,
            coursedetails: this.state.coursedetails,
            instructor: this.state.instructor,

        };
        axios.post('http://localhost:4000/courses/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course No :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.courseno}
                            onChange={this.onClickCourseNo}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course Name :</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.coursename}
                               onChange={this.onClickCourseName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Credits :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.credits}
                            onChange={this.onClickCredits}
                        />
                    </div>
                    <div className="form-group">
                        <label>Course Details :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.coursedetails}
                            onChange={this.onClickCourseDetails}
                        />
                    </div>
                    <div className="form-group">
                        <label>Instructors :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.instructor}
                            onChange={this.onClickInstructors}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                               value="Update Course"
                               className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}