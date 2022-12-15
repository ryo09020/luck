let user;
let usresult;
user=prompt("お名前は？");

if(user==""){
    user="名無し"
}

document.getElementById("name").innerHTML=user;

let rand=Math.floor(Math.random()*5);
if(rand==0){
    usresult="大吉";
}
if(rand==1){
    usresult="中吉";
}
if(rand==2){
    usresult="小吉";
}
if(rand==3){
    usresult="吉";
}
if(rand==4){
    usresult="凶";
}
document.getElementById("result").innerHTML=usresult;