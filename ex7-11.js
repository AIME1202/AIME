function add4(){
var a =document.getElementById('nen4').value;
var b=Number(x)%Number('4');
var c=Number(x)%Number('100');
var d=Number(x)%Number('400');
if(c==0&&d!=0){
 alert('平年');
}
else if(b==0){
 alert('うるう年');
}
else{
 alert('平年');
 }
}
