import React, { Component } from 'react';
import axios from 'axios';

export default class LecturesEdit extends Component {

    constructor(props){
        super(props);
        this.onClickLectureId = this.onClickLectureId.bind(this);
        this.onClickLectureName = this.onClickLectureName.bind(this);
        this.onClickType = this.onClickType.bind(this);
        this.onClickLectureDetails = this.onClickLectureDetails.bind(this);
        this.onClickFaculty = this.onClickFaculty.bind(this);
        this.onClickPassword = this.onClickPassword.bind(this);
        this.onClickEmail = this.onClickEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            lecId:'',
            lecName:'',
            typeOfEmp:'',
            lecturedetails:'',
            faculty:'',
            passwrd:'',
            email:''
        }

    }


    componentDidMount() {
        axios.get('http://localhost:4000/lectures/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    lecId: response.data.lecId,
                    lecName: response.data.lecName,
                    typeOfEmp: response.data.typeOfEmp,
                    lecturedetails: response.data.lecturedetails,
                    faculty: response.data.faculty,
                    passwrd: response.data.passwrd,
                    email: response.data.email,
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onClickLectureId(e){
        this.setState({
            lecId : e.target.value
        });
    }

    onClickLectureName(e){
        this.setState({
            lecName : e.target.value
        });
    }


    onClickType(e){
        this.setState({
            typeOfEmp : e.target.value
        });
    }

    onClickLectureDetails(e){
        this.setState({
            lecturedetails : e.target.value
        })
    }

    onClickFaculty(e){
        this.setState({
            faculty : e.target.value
        })
    }

    onClickPassword(e){
        this.setState({
            passwrd : e.target.value
        })
    }

    onClickEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            lecId: this.state.lecId,
            lecName: this.state.lecName,
            typeOfEmp: this.state.typeOfEmp,
            lecturedetails: this.state.lecturedetails,
            faculty: this.state.faculty,
            passwrd:this.state.passwrd,
            email:this.state.email

        };
        axios.post('http://localhost:4000/lectures/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/lectureindex');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Lecture/Student Id :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lecId}
                            onChange={this.onClickLectureId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lecture/Student Name :</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.lecName}
                               onChange={this.onClickLectureName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Type :</label>
                        <select name="Type" className="form-control" onChange={this.onClickType} value={this.state.typeOfEmp}>
                            <option value="">Choose option</option>
                            <option value="Instructors" >Instructors</option>
                            <option value="Students" >Students</option>
                            <option value="Admin" >Admin</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Details :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lecturedetails}
                            onChange={this.onClickLectureDetails}
                        />
                    </div>
                    <div className="form-group">
                        <label>Faculty :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.faculty}
                            onChange={this.onClickFaculty}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.passwrd}
                            onChange={this.onClickPassword}
                            required
                        />
                        <div className="form-group">
                            <label>Email :</label>
                            <input
                                type="Email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onClickEmail}
                                required
                            />
                        </div>
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