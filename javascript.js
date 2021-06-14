


let nombre = prompt('Ingrese el nombre del alumno');

let nota1 = parseInt(prompt('Ingrese la primera nota del alumno'));

let nota2 = parseInt(prompt('Ingrese la segunda nota del alumno'));

let nota3 = parseInt(prompt('Ingrese la tercera nota del alumno'));

let promedio= (nota1+nota2+nota3)/3;

// IMPRESION EN LA CONSOLA
console.log('Nombre del alumno: '+ nombre);

console.log('Primera nota del alumno: '+nota1);

console.log('Segunda nota del alumno: '+nota2);

console.log('Tercera nota del alumno: '+nota3);

console.log('Promedio final: '+promedio);

alert('La nota promedio del alumno '+nombre+' es: '+promedio);


//IMPRESION EN HTML

document.write('<h1 style="display=inline">Nombre del alumno: </h1> '+ nombre);

document.write('<h1 style="display=inline">Primera nota del alumno: </h1> '+nota1);

document.write('<h1 style="display=inline">Segunda nota del alumno: </h1> '+nota2);

document.write('<h1 style="display=inline">Tercera nota del alumno: </h1> '+nota3);

document.write(' <h1 style="display=inline"> Promedio final: </h1> '+ promedio  );













