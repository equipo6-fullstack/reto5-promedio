
promedio(70, 80, 80, 90, 60);
promedio(70, 50, 75, 70, 60);

function promedio(grade1, grade2, grade3, grade4, grade5){
    let sum = grade1 + grade2 + grade3 + grade4 + grade5;
    let average = sum / 5;
    // console.log(average);

    if(average >= 70){
        alert(`Aprobado: ${average}.`);
        console.log(`Aprobado: ${average}.`);
        document.getElementById("promedio1").innerHTML = `Calificaciones: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${grade5}. 
         Aprobado: ${average}.`;
    }
    else{
        alert(`No Aprobado: ${average}.`);
        console.log(`No Aprobado: ${average}.`);
        document.getElementById("promedio2").innerHTML = `Calificaciones: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${grade5}.
        No Aprobado: ${average}.`;
    }

}


