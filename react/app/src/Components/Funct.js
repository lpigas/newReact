import React, { useState } from 'react'
// import Ccomponents from './Ccomponents'



    

    function Funct(){
        
        const [alt, setAlt] = useState([])
        const fec = () =>{
            const newArr = [];
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
            .then(res => res.json())
            .then(x => x.drinks.map((item)=> newArr.push(item)))
            .then(y => setAlt(newArr))
    
            
        }
        console.log(alt)
        return(
            <ul>
                <button onClick={fec}>Loading</button>
          {alt.map((item, index) => {
           return (
           <li key={index}>
             {item.strDrink}
              <img border="2px solid black" width='50' height='50' alt={item.name} src={item.strDrinkThumb}></img>

            </li>)
          })}
        </ul>
        )
    }
    export default Funct