import React,{Component} from 'react';
import axios from 'axios';


export default class LecturesCreate extends Component{

    constructor(props){
        super(props);
        this.onClickLectureId = this.onClickLectureId.bind(this);
        this.onClickLectureName = this.onClickLectureName.bind(this);
        this.onClickDesignation = this.onClickDesignation.bind(this);
        this.onClickLectureDetails = this.onClickLectureDetails.bind(this);
        this.onClickFaculty = this.onClickFaculty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            lecId:'',
            lecName:'',
            designation:'',
            lecturedetails:'',
            faculty:''
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


    onClickDesignation(e){
        this.setState({
            designation : e.target.value
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

    onSubmit(e){
        e.preventDefault();

        const obj = {
            lecId: this.state.lecId,
            lecName: this.state.lecName,
            designation: this.state.designation,
            lecturedetails:this.state.lecturedetails,
            faculty:this.state.faculty

        };
        axios.post('http://localhost:4000/lectures/add',obj)
            .then(res=> console.log(res.data));

        this.setState({
            lecId:'',
            lecName:'',
            designation:'',
            lecturedetails:'',
            faculty:''
        })

    }


    render() {
        return(

            <div >
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Lecture Id :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lecId}
                            onChange={this.onClickLectureId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lecture Name :</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.lecName}
                               onChange={this.onClickLectureName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Designation :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.designation}
                            onChange={this.onClickDesignation}
                        />
                    </div>
                    <div className="form-group">
                        <label>Lecturere Details :</label>
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
                        <input type="submit" value="Register Course" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }

}


