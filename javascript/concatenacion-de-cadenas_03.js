//Concatenacion de cadenas en js.
//Paraconcatenar cadenas vamos a defnir dos variables.
var nombre ="Juan";
var apellido ="Perez";
var nombreCompleto =nombre+apellido;
console.log(nombreCompleto);
//si fueran numeros estos se sumarian pero como son palabras se concatenan.
//si quisieramos un espacio entre las palabras debemos poner comillas espaciadas entre la suma de las variable (nombre+" "+apellido).
//ejemplo 2
var nombreCompleto2 ="Carlos"+" "+"Lara";
console.log(nombreCompleto2);
//ejemplo 3
//si quisieramos un numero para concatenarlo a una cadena.
var x =nombre+219;
console.log(x);
//En este caso el numero lo toma como una cadena.
//Las expresiones en js se evaluan de izquierda aderecha y debido que en el lado izquierdo hay una cadena y posteriormente un numero a este lo trata como cadena.
x=nombre+2+4;
console.log(x);
//no se hzo la suma de 2+4 porque se toma comostr y se concatena.
//si queremos que los valores numericos realmente se sumen.
x =nombre+(2+4);
console.log(x);
//al poner los parentesis toma prioridad las suma numerica y luego este se concatena con la cadena.
x =2+4+nombre;
console.log(x);
//leeria primero los numeros como suma y luego concatenaria el str.
//a esto se le llamaria contexto str o contexto de cadena.
