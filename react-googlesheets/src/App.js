import React, { Component, useState } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'

function App() {
  const url=""
  const [name,setName]=useState("")
  const [age,setAge]=useState("")
  const [salary,setSalary]=useState("")
  const [hobby,setHobby]=useState("")
  /*
  let state = {
    Name: name,
    Age: age,
    Salary: salary,
    Hobby: hobby
 }
 */

  const changeHandler = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'age':
        setAge(event.target.value);
        break;
      case 'salary':
        setSalary(event.target.value);
        break;
      case 'hobby':
        setHobby(event.target.value);
        break;
      default:
        console.log('key not found');
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    let state={
      name: name,
      age: age,
      salary: salary,
      hobby: hobby
    }
    console.log(state)
    console.log("submit")
    axios.post(url,state).then(response=>{
      console.log(response)
    })
  };

  return (
    <div className="App">
      <Header as="h2">React Google Sheets!</Header>
      <Form className="form" onSubmit={submitHandler}>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Enter your name" type="text" name = "name" value = {name} onChange={changeHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input placeholder="Enter your age" type="text" name = "age" value = {age} onChange={changeHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder="Enter your salary" type="text" name = "salary" value = {salary} onChange={changeHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input placeholder="Enter your hobby" type="text" name = "hobby" value = {hobby} onChange={changeHandler}/>
        </Form.Field>
        <Button color="blue" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
