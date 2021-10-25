function repeatName(str,num) {
    if (num == 0){
        return str
    }
    else{
       return  str + '\n' + repeatName(str,num - 1)
    }
}
console.log(repeatName('Thomas',10))
    
