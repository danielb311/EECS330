import React, { Component } from 'react';
import Loader from 'react-loader-spinner'


class CourseStudents extends Component{
    constructor(props){
        super(props);

        //URL is the current url while taking in the parameters from the props of the previous url
        this.state = {
            apiKey: "1876~H4edcIGWB68NtnF4eCsFLVEvBMa0NEqBmFNhxeX6LGWOQoOlmugN7tAwOIKmdB9H",
            students: [],
            url: '',
            loaded: false,
        }
    }

    componentWillMount(){
        this.setState({students: []})
    }
     
    //fetch assignments for course with course_id passed down
    componentDidMount(){
        const { match: { params } } = this.props;
        this.setState({url: `/courses/${params.course_id}/students`});
        fetch(`https://canvas.northwestern.edu/api/v1/courses/${params.course_id}/users?per_page=500&access_token=${this.state.apiKey}`)
        .then(res => res.json())
        .then(students => this.setState({students}))
        .catch(this.setState({students: null}))
                
    }


    render(){

        if (this.state.students == []){
            return(
                <Loader type="TailSpin" color="black" height={80} width={80} />
            )
        }
        else if(this.state.students === null) {
            return (
                <h1>Error! No students found!</h1>
            )
        }
        
        else{

        
        return(
            <div>
    
                    <ul>
                        {
                            this.state.students.map(students =>
                                <li key={students.id}>{students.name}</li>)
                        }
                    </ul>
        </div>
        );
    }


}
}

export default CourseStudents;
