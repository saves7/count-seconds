window.onload = function (e) {
   
    let buttons = document.querySelectorAll('.button-box__button');
    let timmerInner = document.querySelector('.timer__content');
    let clicked = false;

   

    buttons[0].addEventListener('click', (e)=>{
        
        
        clicked = true;
        if(clicked){
            buttons[0].disabled = true;
        } else { buttons[0].disabled = false;}

        let i = 0;
        
      
        let timer = setTimeout(function counterTime(){

            buttons[1].addEventListener('click', (e) =>{
                clearTimeout(timer);
                buttons[0].disabled = false;
            });

            i++;
            timmerInner.innerHTML = i;
            timer = setTimeout(counterTime, 1000);
         
        }, 1000);  
        

    }); 

 

};
