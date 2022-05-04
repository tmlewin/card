
const AssignmentGrader = (arr) => {
    let day = 0;
    let hours = 8;
    let total = 0;
  
    for(let i = essays.lenght - 1; i >= 0; i--){
      if(hours > i + 1){
       hours = i - hours
      } while(hours < 8){
        day++;
        hours = 8;
      }
      
    }
    return day;
    }



  