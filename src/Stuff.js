import React, { Component } from "react";
import Child from "./Home";
 
class Stuff extends Component {
	
	constructor(props){
		super();
		this.state = {
			homeLink : "STUFF"
		};
	}
	
	onGreet(){
		alert("Hello!");
	}
	
	onChangeLinkName(newName){
		this.setState({
			homeLink:newName
		})
	}
	
  render() {
	var user={
		  name: "babu",
		  age :24
	  };
	  
    return (
      <div>
        <h2>homeLink ={this.state.homeLink}</h2>
		<div>
        <Child 
		name={"rajan"} 
		initialAge={25} 
		user={user} 
		greet = {this.onGreet}
		changeLink = {this.onChangeLinkName.bind(this)}
		initialLinkname = {this.state.homeLink}
		/>
         </div>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;