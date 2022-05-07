export const useArrayForLength = (totallPagesNumbers) =>{
    const newArray = []
        for (let i = 1; i <= totallPagesNumbers; i++){
            newArray.push({name:i, value:i})
        }
        
      return newArray;
}