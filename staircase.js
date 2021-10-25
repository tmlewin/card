// const staircase = (n)=>{
//     for (let i = 0; i < n; i++) {
//         let step = ' ';
  
//      for (let j = 0; j < n; j++) {
//         if (j <= i) {
//           step += '#'
//        } else {
//           step += ' ';
//        }
//      }
//      console.log(step)
//     }
//   }
//   staircase(6)

function staircase(n){
    // to get the row we create an outer loop for

    for(let i = 0; i < n; i++) {
        let stair =  ' ';

    for(let j =0; j < n; j++) {
        if(j <= i) {
           stair += "#"

            
        }else{
            stair += ' '
        }

    }
    console.log(stair)

    
        
    }


}
staircase(6)

/*
#
##
###


**/