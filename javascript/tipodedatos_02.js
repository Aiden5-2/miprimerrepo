//Tipo de datos.
//str o cadenas.
var nombre="carlos";
console.log(nombre);
//cambiamosel valor de la variable nombre.
nombre =10.5;
console.log(typeof nombre);
//typeof es para saber que tipo devariable es.
//numerico.
var numero=1000;
console.log(numero);
//objet.
var objeto={
    nombre:"juan",
    apellido:"perez",
    telefono:"55443322"
}
console.log(objeto);
//Tipo dedato boolean (True,False).
var bandera = true;
console.log(typeof bandera);
//Tipo de dato function.
// Permite realizar ciertas tareas y nos permitereutilizarlas lineas de codigo.
function miFuncion(){};
console.log(miFuncion); 
//Tipo de dato symbol.
//Se utiliza para crear un valor unico de una variable.
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
//Tipo clase es una functiom.
//Es parecido a la creacion de un objeto y podemos agregar atributos.
//lo vamos a especificar a travez de un constructor.
class persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(persona);
//Tipo de dato undefine.
//Este tipo de dato lo tenemos definido por default cuando definimos una variable.
var x;
console.log(x);
//al no haberle agregado un valor a la variable nos imprime la cadena undefined.
x= undefined;
console.log(x);
//tambien podemos agregarle el valor undefined pero eso es algo que sele asigna automaticamente.
//null= Ausencia de valor.
var y = null;
console.log(y);
//indicamos queesta variable no tiene aun ningun valor asignado.
//si preguntamos el tipo devalor que tiene la misma dira que es un object.
//tipo de dato Array(arreglos)(object).
//Para definir un arreglo abrimos y cerramos corchetes.Puede contener cualquier tipo de datos de manera interna.
var autos =["BMW","Audi","Volvo"];
console.log(autos);
//tipo de dato de la variable es object.
//autos es arreglo de tipo str.
//Empty String(cadenas vacias).
//si no especificamos el valor de la variable seria undefined, pero tambien podemos darle un valor(una cadena vacia).
var z =" ";
console.log(z);
//si imprimimos el tipo de nuestra variable z nos da str.
//cadena vacia no esun tipo de dato si no que es un valor que podemos asignarle.

