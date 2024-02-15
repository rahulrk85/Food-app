import UserClass from "./UserClass";
import React from "react"


class About extends React.Component{

    constructor(props){
        super(props);
        // console.log("Parent constructor")
    }

    componentDidMount(){
        // console.log("Parent componentDidMount")
    }
    render(){
        // console.log("Parent render")
        return(
            <div>
                <h1>About Us</h1>
                
                <UserClass name={"First"}  Location={"Gulbarga"}/>
                <UserClass name={"secound"}  Location={"Gulbarga"}/>
    
            </div>
        );
    }
}


export default About;