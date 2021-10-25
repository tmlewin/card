let arrs = [-5,1,5,0,-7]
// keep track of altitude as it sums with the value of array and assigns to the max variable after the conditional which chekcs if its greater than max

calAltitude = (arr)=>{
    let altitude = 0
    let max = 0
    for (let i=0; i<arr.length; i++){
        altitude += arr[i]
        
        
        if (altitude > max){
            
            
            max = altitude
        }
    }
    return max
}
console.log(calAltitude(arrs))