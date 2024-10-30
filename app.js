function handleClick(){
    let=randomVal=Math.floor((Math.random()*10)+1);
    console.log(randomVal);
    let txtValue = document.getElementById("valueInput").value;
    console.log(txtValue);

    for(let i = 3 ; i>0 ; i--){

    if(randomVal == txtValue){
        document.getElementById("resultMsg").innerHTML = "The number was correct! You won!";
    }else if(randomVal > txtValue){
        document.getElementById("resultMsg").innerHTML = "The number is low.Try guessing a higher number!";
    }else if(randomVal < txtValue){
        document.getElementById("resultMsg").innerHTML = "The number is high. Try Guessing a lower number!";
    }else{  
        document.getElementById("resultMsg").innerHTML = "Invalid Input! Try again..."
    }
    document.getElementById("chancesLeft").innerHTML = "Chances Left : "+i;
}
}

