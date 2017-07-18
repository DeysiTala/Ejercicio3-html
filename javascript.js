
function convertirCelcius(){
  var a = document.getElementById("farenheit").value ;
   var celcius = (a - 32)*5/9 ;
  document.getElementById("f").innerHTML = celcius;
   
}
