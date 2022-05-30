//Sintaxis para declarar variables.
//Para declarar variables hemos estado utilizando la palabra var sin embargo esta es una practica que el dia de hoy
//ya no se recomienda. 
//Ahora utilizamos la palara let para las variables y la palabra const para lasconstantes.
//con let podemos reasignarle valores auna variable y con const ya no podremos reasignar valores a la misma.
nombre = "Juan";     //en java podemos asignar valores sin necesidad de utilizar palabras reservadas pero esto no es una buena practica.
console.log(nombre);
//lo que se encuentra de lado derecho del igual es el valor asignado.
//(1,10.0,"carlos"( literales)
//ejemplo2
let nombre1="Juan";
console.log(nombre1);
//ejemplo3
let nombre2;
nombre2="Juan";
console.log(nombre2);
//se puede asignar tambien valores a las variables luego de definirla yaque no siempre tendremos los valores en el instante.
const apellido ="Perez";
//si ponemos luego apellido = "Lara" dara erro ya que no se puede modificar una constante.
//Buenas practicas para nombres de variables en js.
//Para declarar nombres a una variale deben ser claros y con mayusculas y minusculasde, de preferecia con anotacion de altas y bajas.
let nombreCompleto1 = "Juan Perez";
console.log(nombreCompleto1);
//console:es un objeto
//los:es un metodo o funcion.
//y dentro de losparentesis se encuentra el argumento.
//ejemplo 2
let x, y;    //podemos definir2 variables en una misma linea
x = 10, y= 20;  //luego asignarle valores
let z =x+y;    //realizar las suma
console.log(z);   //para posteriormente mostrar en consola la operacion final
//reglas para definir nombresde variables.
let nombreCompleto ="Juan Perez";
let nombrecompleto ="Carlos Lara";
console.log(nombreCompleto);
console.log(nombrecompleto);
//en js es a mayusculas y minusculas ya que ambas variables almacenan valores distintos por ende debemos redactar exactamente lo que definimos o nos dara erro o otro valor
//reglas para  definir nombre de variables.
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//lest 1nombreCompleto; no esta permitido iniciar el nombre con  numeros y no se puede tampoco con palabras reservadas.
//let breack =10; nose puede.
let _break =10; //se podra usar pero no es recomendable.