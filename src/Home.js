import React, { Component } from "react";
 
class Home extends Component {
	constructor(props){
		super();
		this.state = {
			age:props.initialAge,
			status:0,
			homeLink : props.initialLinkname
		};
		setTimeout(() => {
			this.setState({status:1});
		},3000);
	}
	
	onMakeOlder(){
		this.age+=3;
		this.setState({
			age: this.state.age+3
		});
	}
	
	onChangeLink(){
		this.props.changeLink(this.state.homeLink);
	}
	
	onHandleChange(event){
		this.setState({
			homeLink : event.target.value
		});
	}
	
  render() {
	  console.log(this.props);
	   const greeting = 'Welcome to React Home';
    return (
      <div>
       
	    <h1>{greeting}</h1>
		<p>name: {this.props.name}</p>
		<p>age: {this.state.age}</p>
		<p>status: {this.state.status}</p>
		
        <button onClick = {() => this.onMakeOlder()}>make me older</button>     
        <hr/>
        <button onClick = {this.props.greet}>Greet</button>    	
		<hr/>
		<input type="text" value ={this.props.homeLink} onChange={(event) => this.onHandleChange(event)}/>
        <button onClick = {this.onChangeLink.bind(this)}>ChangeHeader</button>  		
      </div>
    );
  }
}
 
export default Home;