
let flag = false;
document.getElementById("Iconca").addEventListener("click",function(){
    if(!flag){
        document.getElementById("menu").style.display=
        'flex';
        document.getElementById("menu").style.flexDirection="column";
        flag=true;
    } else{
        document.getElementById("menu").style.display=
        'none';
        flag=false;
    }

})