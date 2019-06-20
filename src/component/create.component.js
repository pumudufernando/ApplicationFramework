import React,{Component} from 'react';
import axios from 'axios';


export default class Create extends Component{

    constructor(props){
        super(props);
        this.onClickCourseNo = this.onClickCourseNo.bind(this);
        this.onClickCourseName = this.onClickCourseName.bind(this);
        this.onClickCredits = this.onClickCredits.bind(this);
        this.onClickCourseDetails = this.onClickCourseDetails.bind(this);
        this.onClickInstructors = this.onClickInstructors.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            courseno:'',
            coursename:'',
            credits:'',
            coursedetails:'',
            instructor:'',
            instrut:[]
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/lectures').then(
            data => {
                this.setState({
                    instrut: data.data
                })
            }
        )
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



    onSubmit(e){
        e.preventDefault();

        const obj = {
            courseno: this.state.courseno,
            coursename: this.state.coursename,
            credits: this.state.credits,
            coursedetails:this.state.coursedetails,
            instructor:this.state.instructor,



        };
        axios.post('http://localhost:4000/approves/add',obj)
            .then(res=> console.log(res.data));

        this.setState({
            courseno:'',
            coursename:'',
            credits:'',
            coursedetails:'',
            instructor:'',

        })

    }


    render() {
        return(

            <div >
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
                        <label>Instructors</label>
                        <select name="lecturer" className="form-control" onChange={this.onClickInstructors} value={this.state.instructor}
                        placeholder="Select the lecture">
                            {
                                this.state.instrut.map(lec => {
                                    return (
                                        <option key={lec.lecName} value={lec.lecName}>{lec.lecName}</option>
                                    )
                                })
                            }
                        </select>
                    </div>


                    <div className="form-group">
                        <input type="submit" value="Register Course" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }

}

/*<div className="form-group">
    <label>Lecture Id :</label>
    <input
        type="text"
        className="form-control"
        value={this.state.lecId}
        onChange={this.onClicklecId}
    />
</div>
*/
/* <div className="form-group">
                        <label>Instructors :</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.instructors}
                            onChange={this.onClickInstructors}
                        />
                    </div>*/

