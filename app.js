let count = 3;
document.getElementById("chancesLeft").innerHTML = "Chances Left : "+count; 
let=randomVal=Math.floor((Math.random()*10)+1);
function handleClick(){
    
    console.log(randomVal);
    let txtValue = document.getElementById("valueInput").value;
    console.log(txtValue);
    

 
   if(count>0){
    if(randomVal == txtValue){
        document.getElementById("resultMsg").innerHTML = "The number was correct! You won! 💋💋🥳";
        
      
    }else if(randomVal > txtValue){
        document.getElementById("resultMsg").innerHTML = "The number is low. Try guessing a higher number! 🫰👻";
      
    }else if(randomVal < txtValue){
        document.getElementById("resultMsg").innerHTML = "The number is high. Try Guessing a lower number! 🫰👻";
        
    }
    else{  
        document.getElementById("resultMsg").innerHTML = "Invalid Input! Try again... ☹️☹️"
    
    }
    count--;
   
    
    document.getElementById("chancesLeft").innerHTML = "Chances Left : "+count; 
    if(count==0){
        document.getElementById("chancesLeft").innerHTML = "Game Over! 🐒🐒"; 
        alert('දැන් බුදියගනින්!');
    }
}
}

   
    
  

  


