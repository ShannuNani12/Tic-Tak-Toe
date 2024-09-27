let count=0;
let text=document.getElementById("text");
let text1=document.getElementById("text1")
let inputall=document.querySelectorAll("button");
// console.log(inputall[1].disabled=true);
function fun(z){
    text.innerHTML=""
    count++;
    console.log();
    // let a=document.getElementById(`${i}`)
    if(count%2==0){
        z.innerHTML="O";
        z.disabled=true;
        z.style.backgroundColor="green";

    }
    else{
        z.innerHTML="X";
        z.disabled=true;
        console.log(z);
        z.style.backgroundColor="red";
    }
    let a=document.getElementById("a").innerHTML;
    let b=document.getElementById("b").innerHTML;
    let c=document.getElementById("c").innerHTML;
    let d=document.getElementById("d").innerHTML;
    let e=document.getElementById("e").innerHTML;
    let f=document.getElementById("f").innerHTML;
    let g=document.getElementById("g").innerHTML;
    let h=document.getElementById("h").innerHTML;
    let i=document.getElementById("i").innerHTML;
    
    console.log(a,b,c,d,e,f,g,h,i)
    if ((a === "X" && b === "X" && c === "X") || 
        (d === "X" && e === "X" && f === "X") || 
        (g === "X" && h === "X" && i === "X") || 
        (a === "X" && d === "X" && g === "X") ||
        (b === "X" && e === "X" && h === "X") ||
        (c === "X" && f === "X" && i === "X") ||
        (a === "X" && e === "X" && i === "X") ||
        (c === "X" && e === "X" && g === "X"))
        {
            text.innerHTML="X Won";
            text1.innerHTML="😍";
            document.body.style.backgroundImage=`url("../../Asserts/Images/Celebratation.gif")`;
            

        }
    if ((a === "O" && b === "O" && c === "O") || 
        (d === "O" && e === "O" && f === "O") || 
        (g === "O" && h === "O" && i === "O") || 
        (a === "O" && d === "O" && g === "O") ||
        (b === "O" && e === "O" && h === "O") ||
        (c === "O" && f === "O" && i === "O") ||
        (a === "O" && e === "O" && i === "O") ||
        (c === "O" && e === "O" && g === "O"))
        {
            text.innerHTML="O Won";
            text1.innerHTML="😍";
            document.body.style.backgroundImage=`url("../../Asserts/Images/Celebratation.gif")`;
          
        }
}