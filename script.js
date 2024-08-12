document.addEventListener('DOMContentLoaded', () =>{
    let button = document.getElementById("read");

    if (button) 
        button.addEventListener('click', () => {
            document.querySelectorAll('.single-box').forEach(e => {
                e.classList.remove('unseen');
            });

          document.querySelectorAll('.dot').forEach(e => {
                e.classList.remove('dot');
         });

         let numElement = document.getElementById('num');
         if (numElement) {
            numElement.innerText = 0;
         }
        

        })
})

    

