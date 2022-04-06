import React, { Component } from 'react'
import Cscomponent from './Cscomponent'


export default class Ccomponents extends Component {
  constructor (props){
    super(props)
    this.state = {
        name:"Button not pressed",
        age: 25
    }
    this.upData = this.upData.bind(this)
}


upData = (newName, newAge) =>{
  console.log(newAge)
  this.setState({
    name: newName,
    age: newAge
  })
}

  render() {
    return (
      <div>
        <p>This state - {this.state.name} and age {this.state.age} </p>
        <Cscomponent upData={this.upData}/>


      </div>

    )
  }
}
