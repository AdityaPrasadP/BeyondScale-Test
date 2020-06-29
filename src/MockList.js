import React, { Component } from "react";
import axios from "axios";
//import * as ReactBootstrap from "react-bootstrap";
 
class MockList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      showForm: false,
      showDeletForm:false,
    };
 this.id='';
    this.createdAt='';
    this.name='';
    this.email='';
    this.resume='';
  }
 
  handleGet = () => {
    axios
      .get("https://5efa2d72bc5f8f0016c67738.mockapi.io/application")
      .then((res) => {
        const list = res.data;
        this.setState({ list });
        console.log(res.data);
      });
  };
  
 
  handlePost = () => {
    this.setState({
      showForm: true,
    });
  };
  submit = (e) => {
    e.preventDefault();
    const newUser= {
      createdAt:new Date(),
      name: this.name,
      email: this.email,
      resumeUrl:this.resume
    }
    axios.post('https://5efa2d72bc5f8f0016c67738.mockapi.io/application', newUser)
    .then(res => console.log(res.data));
 
 
  this.setState({
    showForm: false,
  });
};



handleDelete=()=>{
  this.setState({
    showDeletForm:true
  })
   
}
submitDelete=(e)=>{
 
    e.preventDefault();
    const id=this.id;
    const url =`https://5efa2d72bc5f8f0016c67738.mockapi.io/application/${this.id}`

    console.log(typeof id);
    axios.delete(url).then(res => console.log(res.data)).catch((err)=>console.log(err));
    this.setState({
      showDeletForm: false,
    });
}

//----------------Handling Inputs
handleId=(e)=>{
  this.id=e.target.value;
}
handleName = (e) => {
    this.name = e.target.value;
};
handleEmail= (e) => {
  this.email = e.target.value;
};
handleResume = (e) => {
  this.resume = e.target.value;
};

//----------------------------

render() {
  return (
    <div>
      
      <button onClick={this.handleGet}>Get</button>
      <button onClick={this.handlePost}>Post</button>
      <button onClick={this.handleDelete}>Delete</button>

      {this.state.showForm && (
        <form onSubmit={this.submit}>
        
          <label>Name</label>{" "}
          <input type="text" onChange={this.handleName}></input>
          <label>Email</label>{" "}
          <input type="email" onChange={this.handleEmail}></input>
          <label>Resume_url</label>
          <input type="text" onChange={this.handleResume}></input>
          <input type="submit"></input>
        </form>
      )}

      {
        this.state.showDeletForm&&<form onSubmit={this.submitDelete}>
          <label>Id</label><input type="text" onChange={this.handleId}></input>
          <input type="submit"></input>
        </form>
      }
      <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th> createdAt</th>
              <th>Name</th>
              <th>Email</th>
              <th>Resume_url</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.createdAt}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.resumeUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default MockList;
 
