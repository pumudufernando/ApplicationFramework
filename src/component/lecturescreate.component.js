import React,{Component} from 'react';
import axios from 'axios';


export default class LecturesCreate extends Component{

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

    onSubmit(e){
        e.preventDefault();

        const obj = {
            lecId: this.state.lecId,
            lecName: this.state.lecName,
            typeOfEmp: this.state.typeOfEmp,
            lecturedetails:this.state.lecturedetails,
            faculty:this.state.faculty,
            passwrd:this.state.passwrd,
            email:this.state.email

        };

        const obj1 = {
            lecId: this.state.lecId,
            passwrd:this.state.passwrd,
            email:this.state.email
        }

        //add to the database
        axios.post('http://localhost:4000/lectures/add',obj)
            .then(res=> console.log(res.data));

        //send an email
        axios.post('http://localhost:4000/lectures/send',obj1)
            .then(res=> {


            })
            .catch(function (error) {

                console.log(error)
            })

        this.setState({
            lecId:'',
            lecName:'',
            typeOfEmp:'',
            lecturedetails:'',
            faculty:'',
            passwrd:'',
            email:''
        })

    }


    render() {
        return(

            <div >
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Lecture/Student Id :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lecId}
                            onChange={this.onClickLectureId}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Lecture/Student Name :</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.lecName}
                               onChange={this.onClickLectureName}
                               required
                        />
                    </div>
                    <div className="form-group">
                        <label>Type :</label>
                        <select name="Type" className="form-control" onChange={this.onClickType} value={this.state.typeOfEmp}>
                            <option value="">Choose option</option>
                            <option value="Instructors" >Instructors</option>
                            <option value="Students" >Students</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Details :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lecturedetails}
                            onChange={this.onClickLectureDetails}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Faculty :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.faculty}
                            onChange={this.onClickFaculty}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password :</label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.passwrd}
                            onChange={this.onClickPassword}
                            required
                        />
                    </div>
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
                    <div className="form-group">
                        <input type="submit" value="Register Course" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }

}

/*
*  <div className="form-group">
                        <label>Type :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.typeOfEmp}
                            onChange={this.onClickType}
                            required
                        />*/
