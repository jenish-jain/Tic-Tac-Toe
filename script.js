
var boxes = document.getElementsByClassName("box");
console.log(boxes);
var noOfBox = boxes.length;
console.log(noOfBox);
var counter = 0;

for( var i = 0; i< noOfBox; i++){
    boxes[i].onclick = function(){
        if(this.getAttribute("checked")!= "true"){
            this.setAttribute("checked","true");
            if(counter % 2 == 0){
                this.innerHTML = "X";
            }
            else{
                this.innerHTML="O";
            }
            counter ++;
        }
    }
}

var playerinputs = new Array(9);
console.log(playerinputs);