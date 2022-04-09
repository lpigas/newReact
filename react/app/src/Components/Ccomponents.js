import React, { Component } from 'react'
// import Cscomponent from './Cscomponent'


export default class Ccomponents extends Component {
  constructor (props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items:[]
    }

}
componentDidMount(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then(response  => response.json())
  .then( 
    (result) =>{
      // console.log(result.drinks)
    this.setState({
      isLoaded: true,
      items: result.drinks
    });

  },
  (error)=>{
    this.setState({
      isLoadedL: true,
      error
    });
  }
  )
}



  render() {
    const {error, isLoaded, items} = this.state
    if(error){
      return <p>Error {error.message}</p>
    } else if(!isLoaded){
      return <p>Loading...</p>
    } else {
      return(
        <ul>
          {items.map((item, index) => {
           return (
           <li key={index}>
             {item.strDrink}
              <img border="2px solid black" width='50' height='50' alt={item.name} src={item.strDrinkThumb}></img>

            </li>)
          })}
        </ul>
      )
    }

    
  }
}
