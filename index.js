let matematicas, historia, filosofia, programacion, etica, promedio;
matematicas = parseFloat(prompt("Matematicas"));
historia = parseFloat(prompt("Historia"));
filosofia = parseFloat(prompt("Filosofia"));
programacion = parseFloat(prompt("Programacion"));
etica = parseFloat(prompt("etica"));
promedio = (matematicas + historia + filosofia + programacion + etica)/5;

if (promedio >= 70) {
    parseFloat(prompt("El Promedio es "+promedio+" Aprobado"));
}else{
    parseFloat(prompt("El Promedio es "+promedio+" Reprobado"));
}