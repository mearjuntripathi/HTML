let a;
function display(num){
  a.value+=num
}
function calulate() {
  a.value=eval(a.value)
}
function clr() {
  a.value=""
}
function del() {
  a.value=a.value.slice(0,-1)
}
window.onload=function() {
   a=document.getElementById('inputsc')
}