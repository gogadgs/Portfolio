// seção de declaração de variaveis // 

const languageEvent = document.querySelectorAll('.style .trigger');


// Estrutura de repetição para dar enfase no evento do ususário // 
languageEvent.forEach((trigger)=>{
    trigger.addEventListener("click",(e)=>{
        const language = trigger.parentElement;
        const isOpen = language.classList.contains('open');


        if(isOpen){
            language.classList.remove('open');
           
            //language.classList = Array.of(language.classList).filter(className=>className !="open");
        }else{
            language.classList.add('open')
        }
    });
});