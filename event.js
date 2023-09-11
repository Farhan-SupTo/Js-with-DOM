let count = 0;
document.getElementById("btn-primary").addEventListener("click", function(){
     count =count + 1;
     document.getElementById("count").innerText = count;
     document.body.style.backgroundColor = "white";
})

document.getElementById("btn-info").addEventListener("click", function(){
     count =count - 1;
     document.getElementById("count").innerText = count;
     document.body.style.backgroundColor = "red";
})