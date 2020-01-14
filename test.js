var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){

    if(content.className == "open"){
        //shring the bos
        content.className = "";
        button.innerHTML = "Show More";
    } else{
        //expand box
        content.className = "open";
        button.innerHTML = "Show Less";
    }

};