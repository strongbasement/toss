document.querySelector("button").addEventListener("click",function()
{
    document.querySelector(".super").setAttribute("src","coin-toss.gif");
var ran=Math.floor((Math.random()*2)+1);
console.log(ran);
if(ran==1)
{
    setTimeout(() => {
        document.querySelector(".super").setAttribute("src","heads.jpg"); 
    }, 1000);
    

}
else{
    setTimeout(() => {
        document.querySelector(".super").setAttribute("src","tails.jpg"); 
    }, 1000);
}
});
