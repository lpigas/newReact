import React from 'react'
// import Ccomponents from './Ccomponents'

export default function Funct(url) {
    const alt = []
    function fec(){
        fetch(url)
        .then(res => res.json())
        .then(x => x.drinks.map(item =>  alt.push(item.strDrink)))
        
    }
    fec(url)
    console.log(setTimeout(() => {return console.log(`<div>${alt[0]}</div> `) }
        // alt.map(item =>{
        //    return <li>{item}</li>
            
        // })
    ,1000))
    
    return 'asd'
   

//    return <div><Ccomponents /></div>
  
}
// console.log(x)