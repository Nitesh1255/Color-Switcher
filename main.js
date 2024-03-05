const buttons = document.querySelectorAll('.button')
/* console.log(buttons) - This will print the NodeList */
const  body = document.querySelector('body')
buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);  /*   It tell the property of that which div i have clicked  */
        if(e.target.id==="grey"){
            body.style.backgroundColor="grey";
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id; /* It pick the color from id */
        }
        if(e.target.id==="black"){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id;
        }
    })
});

