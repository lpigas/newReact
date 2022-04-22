import React, { useEffect, useState } from 'react'
// import Funct from './Funct'
const styles = {
  border:'3px solid white',
  color: "white",
  margin: '15px',
  justifyContent: 'center',
  width:'175%'
  
}
export default function Functions() {
    const [drinks,setDrinks] = useState([]);
    const [isLoaded, setIsLoading] = useState(false)
    const [test, setTest] = useState(false)
    const [testSecond, setTestSecond] = useState(false)
    const [items, setItems] = useState(1)
    const getData = async () =>{
        setIsLoading(true);
        const response =await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
        const data = await response.json();
        setDrinks(data.drinks);
        setIsLoading(false);
        setIsLoading(false)
      }

      useEffect(() =>{
        getData()
      },[])
      useEffect(() =>{
        
        
    },[drinks])

    
    
    const FunctionSortFirst =() => {     
      if( items % 2 === 0) {
        document.querySelector('.first').classList.add('activeS')
        document.querySelector('.first').classList.remove('activeF')
        document.querySelector('.second').classList.remove('activeF', 'activeS')
        drinks.sort((a, b) => {
          return (a.strDrink.localeCompare(b.strDrink))})
        } else {
          document.querySelector('.first').classList.add('activeF')
          document.querySelector('.first').classList.remove('activeS')
          document.querySelector('.second').classList.remove('activeF', 'activeS')
          drinks.sort((a, b) => {
            return (b.strDrink.localeCompare(a.strDrink))})
          }
      setTest(true)
      return (drinks);
    }
    
    const FunctionSortSecond =() => {     
      if( items % 2 === 0) {
        drinks.sort((a, b) => {
          document.querySelector('.second').classList.add('activeS')
          document.querySelector('.second').classList.remove('activeF')
          document.querySelector('.first').classList.remove('activeF', 'activeS')
          return (a.idDrink - b.idDrink)})
        } else {
          drinks.sort((a, b) => {
            document.querySelector('.second').classList.add('activeF')
            document.querySelector('.second').classList.remove('activeS')
            document.querySelector('.first').classList.remove('activeF', 'activeS')
            return (b.idDrink -a.idDrink)})
          }
      setTestSecond(true)
      return (drinks);
    }

    const FunctionReset = () =>{
      getData()
      document.querySelector('.second').classList.remove('activeS', 'activeF')
      document.querySelector('.first').classList.remove('activeF', 'activeS')
    }

    useEffect(() =>{
      if(test === true && testSecond === false){
        setDrinks(FunctionSortFirst())
        setItems(Math.floor((items+1)))
        setTest(false)
    } else if(test === false && testSecond === true) {
        setDrinks(FunctionSortSecond())
        setItems(Math.floor((items+1)))
        setTestSecond(false)
    }
  })

    return (
      <div>
      {isLoaded && <p style={{color:'white'}}>Loading,,,</p>}
      <table className='drinks' id='Table'>
        <tbody>
      <button onClick={FunctionReset}>reset</button>
        <tr className='appx' style={{color:'white'}}>
          <td className='appx first' onClick={FunctionSortFirst} >Напитки</td>
          <td className='appx second' onClick={FunctionSortSecond}>Код</td>
          <td className='appx' >Фото</td>
        </tr>
          
        {drinks.map((i,index) => <tr key={i.idDrink}>
          <td style={styles}>{i.strDrink}</td> 
          <td style={styles} color="red">{i.idDrink}</td>
          <td style={styles} color="red"><img height='50px' width='50px' src={i.strDrinkThumb} alt={i.idDrink} /></td>
        </tr>
         ) }
      <tr>
        {/* <td><Funct /></td> */}
      </tr>

        </tbody>

        
      </table>

    </div>)
}
