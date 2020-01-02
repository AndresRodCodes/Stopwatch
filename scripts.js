window.onload = function() {
    document.getElementById("time").innerHTML = "0";
};

function increment() {    
    var time = document.getElementById("time").innerHTML;
    var numTime = parseInt(time);
    numTime++;
    document.getElementById("time").innerHTML = numTime.toString();
}

function decrement() {    
    var time = document.getElementById("time").innerHTML;
    var numTime = parseInt(time);
    numTime--;
    document.getElementById("time").innerHTML = numTime.toString();
}