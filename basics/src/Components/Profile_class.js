import React from "react";
import UserContext from "../utils/UserContext";
class Profile_class extends React.Component{

    constructor(props){
        super(props);
        // create all the states here 
        this.state = {
            count : 0,
            count2 :0,
            userInfo:{
                name:"Dummy",
                location:"HAssan",
            },
        }
        console.log('construtor')

    }

    async componentDidMount(){
        console.log("comp did mount")
        const data = await fetch("https://api.github.com/users/Shreyankthehacker")
        const json = await data.json();
        this.setState({userInfo : json})

    }

    render() {
        console.log("render")
        return (
        <>
        <h1>Profile class Component {this.props.name}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 , count2:this.state.count2+2})}>
            Increment ctr
            </button>

                    <h5>{this.state.count}   {this.state.count2}</h5>
                    <img src = {this.state.userInfo.avatar_url}/>
                    <ul>
        {Object.entries(this.state.userInfo).map(([key, value]) => (
          <li key={key}>
            <strong>{key}</strong>: {value}
          </li>
        ))}
      </ul>
      <UserContext.Consumer >
        {(data)=>{
            <h1>data.loggedInUser</h1>
        }}
      </UserContext.Consumer>
                    </>
                     
        )
            
         }

}

export default Profile_class;