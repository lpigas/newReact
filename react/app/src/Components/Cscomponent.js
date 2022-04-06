import React, { Component } from 'react'

export default class Cscomponent extends Component {
    constructor (props){
        super(props)
        this.state = {
            name:"Button pressed",
            age: 42
        }
    }
  render() {
    return (
      <div>
          <button onClick={() => this.props.upData(this.state.name, this.state.age)}>Button</button>
      </div>
    )
  }
}
