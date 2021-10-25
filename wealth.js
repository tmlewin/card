let accounts = [[2,8,7],[7,1,3],[1,9,14]]

const calcWealth = (array) => {
    let max  = 0
    
    for (let i = 0; i < array.length; i++) {
        let wealth = 0
      
        for (let j = 0; j < array[i].length; j++) {
            wealth += array[i][j]
            if(wealth > max){
                max = wealth
            }

        }
    }
    return max
}
console.log(calcWealth(accounts))