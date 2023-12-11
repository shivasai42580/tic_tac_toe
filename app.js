let boxes=document.querySelectorAll(".box");
let resrbtn=document.querySelector(".reset");
let newgame=document.querySelector(".new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    count = 0;
}
let count = 0;
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkwinner();

    })
});
const disableboxes=()=>{
    for(box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let pattern of winpattern){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1!=""&&pos2!=""&&pos3!="")
            {
                if(pos1==pos2 && pos2==pos3)
                {
                    console.log("Winner",pos1);
                    showwinner(pos1);
                    return;
                }
            }
    }
    if (count == 9) {
        msg.innerText = "It's a draw!";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
}
newgame.addEventListener("click",resetGame);
resrbtn.addEventListener("click",resetGame);