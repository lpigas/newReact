

const FunctionSortFirst =() => {     
  if( items % 2 === 0) {
    drinks.sort((a, b) => {
      return (a.strDrink.localeCompare(b.strDrink))})
    } else {
      drinks.sort((a, b) => {
        return (b.strDrink.localeCompare(a.strDrink))})
      }
  setTest(true)
  return (drinks);
}
    export default FunctionSortFirst