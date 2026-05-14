  // ALL query selector is use to select the All button 
 const buttons = document.querySelectorAll('.button');
//  console.log(buttons);
// select the body element to change background color
 const body = document.querySelector("body");
 // loop through the buttons and add event listener to each button
buttons.forEach(function(button){
    console.log(button);
    // add event listener to each button and click and function to change the background color of the body
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target);
        // check the id of the button that is clicked and change the background color accordingly
        if(e.target.id === 'grey'){
            body.style.backgroundColor = "grey";
        }
         if(e.target.id === 'white'){
            body.style.backgroundColor = "white";
        }
         if(e.target.id === 'blue'){
            body.style.backgroundColor = "blue";
        }
         if(e.target.id === 'yellow'){
            body.style.backgroundColor = "yellow";
        }
     });
});