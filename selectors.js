var x=document.getElementById("text");
console.log(x.innerHTML);
var tag=document.getElementsByTagName("h1")[1];
console.log(tag.innerHTML);
var input=document.getElementsByName("my name")[0]
console.log(input.type);
var span = document.getElementsByClassName("clas")[0]
console.log(span.innerHTML)
var button=document.getElementById("btn")
button.onclick=function(){
	span.style.background="red"
	console.log(input.value)
}