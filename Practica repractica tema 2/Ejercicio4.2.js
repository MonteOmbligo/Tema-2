let num = parseInt(prompt("Introduzca un numero"));
while(num<=0){
    num = parseInt(prompt("Error: Se necesita un numero positivo"));
}
//¿Convierte NaN a 0 automatica a la hora de decidir si entrar en el bucle? 
if(isNaN(num)){
    document.getElementById("pregunta").innerHTML+="Ha cancelado la ejecucion";
}else{
    let suma = 0;
    let aux=num;
    while(aux>0){
        suma+=aux%10;
        //Sin redondear no funciona bien
        aux=Math.floor(aux/10);
    }
    alert("La suma de los digitos de "+num+" es "+suma);

}