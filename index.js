

const DecreaseBtn = document.getElementById("decreasebtn");
const IncreaseBtn = document.getElementById("increasebtn");
const ResetBtn = document.getElementById("resetbtn");
const Countlabel = document.getElementById("countlabel");

let count = 0;


IncreaseBtn.onclick = function(){
    count++;
    Countlabel.textContent = count;

};

DecreaseBtn.onclick = function(){
    count--;
    Countlabel.textContent = count;

};


ResetBtn.onclick = function(){
    count = 0;
    Countlabel.textContent = count;

};


