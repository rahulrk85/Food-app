import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name:"dummy",
                Location: "Default",
            }

        };
        // console.log(this.props.name,"constructor");
    }

    async componentDidMount(){
        // console.log(this.props.name, "DidMountComponent");
        const data = await fetch("https://api.github.com/rahulrk85");

        const json = await data.json();
        this.setState({
            userInfo: json,
        })
    }

    render(){

        // console.log(this.props.name, "render")
        return(
            <div className="user-card">
                <h3>{this.props.name}</h3>
                <h3>{this.props.Location}</h3>
            </div>
        );
    }
}

export default UserClass;