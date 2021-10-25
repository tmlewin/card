const  area = (r) => {
    const pie = 3.14;
    return  pie * r** 2
    
    

}

//console.log(area(7))

const circumference = (r) =>{
    const pie = 3.14
    return 2 * pie * r
     
}
//console.log(circumference(7))

const geom = (text,r) =>{
    
    if(text == 'area'){
        return area(r)

    
}else{
    return circumference(r)

    
}



    
}

console.log(geom('area',7))