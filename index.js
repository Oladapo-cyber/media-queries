onload = (function(){
    addPara();
})();


function addPara(){
    var newPara = document.createElement("p");
    newPara.innerHTML = "Hello, world!";
    document.body.appendChild(newPara);
}