
// // let string="";
// // let buttons=document.querySelectorAll('.btn');
// // // console.log(buttons);
// // console.log("Coreect");
// // Array.from(buttons).forEach((button)=>
// // {
// //     console.log("Coreect");
// //     button.addEventListener('click',(e)=>{
        
// //         if(e.target.innerHTML=='=')
// //         {
// //             string=eval(string);
// //             document.querySelector('input-display').value=string;
// //         }
// //         else if(e.target.innerHTML=='C')
// //         {
// //             string="";
// //             document.querySelector('input-display').value=string;
// //         }
// //         else
// //         {
// //             console.log(e.target)
// //             string=string+e.target.innerHTML;
// //             document.querySelector('input-display').value=string;
// //         }
// //     })
// // })
// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     console.log("pratham")
//     button.addEventListener('click', (e)=>{
    
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })
console.log("Program Starts Execute!")
// let screen=document.getElementsByClassName('input-display')
// let empty="0";
// document.querySelector('input-display').value="000";
// screen.value=0;
string=""
button=document.querySelectorAll('button');
for(item of button)
{
 
    item.addEventListener('click',(e)=>{
        if(e.target.innerText=='=')
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerText=='C') 
        {
            string="0";
            document.querySelector('input').value = string;
        }
        else
        {
        string=string+e.target.innerText;
        document.querySelector('input').value = string;
        }
    })
}