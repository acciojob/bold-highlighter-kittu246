
function highlight() {
    //Write your code here

    // console.log("hey");
   
    let highlight = document.getElementsByTagName("strong");
   for(let i =0;i<highlight.length;i++){
    highlight[i].style.color='green';
   }

}


function return_normal() {
    //Write your code here
    let highlight = document.getElementsByTagName("strong");
    for(let i =0;i<highlight.length;i++){
        highlight[i].style.color='black';
       }
}
