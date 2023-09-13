let count =0;
document.getElementById("input-btn").addEventListener("click", function(){
     count++;
    const myInputValue = document.getElementById("input-value").value
    // console.log(myInputValue)
    const parent =document.getElementById("content-container")

    const tr = document.createElement("tr")
    tr.innerHTML =`
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class="btn btn-danger deleteBtn">delete</button>
    <button class="btn btn-info">done</button>
    </td>
    
    `
    parent.appendChild(tr);
    document.getElementById("input-value").value = ""

    const elements =document.querySelectorAll(".deleteBtn")

    for(const value of elements){
        value.addEventListener("click", function(e){
           e.target.parentNode.parentNode.style.display ="none"
        })
         
    }
})
document.getElementById("clear-btn").addEventListener("click", function(e){
    console.log("e.target.parentNode")
    e.target.parentNode.style.display = "none"

})