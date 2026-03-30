//first to generate random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalID;
// console.log(randomColor());
const startChangingColor = function(){
    // intervalID = setInterval(changebgColor, 100);
    if (!intervalID){//we used this because we cannot change null to any value
        intervalID = setInterval(changebgColor, 100);
    }
    //there should be a function made so that the function called again and agian
    function changebgColor(){
        document.body.style.backgroundColor = randomColor();
        
    }
    
};
const stopChangingColor = function(){
    clearInterval(intervalID)
    intervalID= null;//this is to remove the value from the variable to clear the memory 
    //if we click on start and then again click on start it will overwrite and use more memory
};


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);
