// console.log('bbhfbsaj')


let string="";

let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
          string=eval(string);
          document.querySelector('input').value=string;
        }

   else  if(e.target.innerHTML=='C'){
            string=" ";
            document.querySelector('input').value=string;
          }
    //  else if(e.target.innerHTML=='DL'){
    //     string=string.substring(0, string.length-1);
    //    input.value=string;
    //  }     
        else{
       console.log(e.target)
        string=string+e.target.innerHTML;
      // srting+=e.target.innerHTML;
       document.querySelector('input').value=string;
        }
    })

})