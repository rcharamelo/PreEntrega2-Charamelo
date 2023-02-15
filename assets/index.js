class Afiliado {
    constructor(nombreApellido, edad, mail, cedula, ingresos) {
        this.nombreApellido = nombreApellido;
        this.edad = edad;
        this.mail = mail;
        this.cedula = cedula;
        this.ingresos = ingresos;
    }

    get_datos(){
        console.log("***Datos del Afiliado***")
        console.log("Nombre: ", this.nombreApellido);
        console.log("Edad: ", this.edad);
        console.log("Aporta e-mail: " ,this.mail);
        console.log("Aporta foto Cédula: " ,this.cedula);
        console.log("Ingresos del Afiliado: " ,this.ingresos);
        console.log("");
    }
}

//FUNCIÓN DEL MENÚ PARA SELECCIONAR OPCIÓN
    let menu = prompt("Bienvenido a la calculadora de comisión por afiliaciones. \n Por favor elija una opción: \n1-Ingresar nueva afiliación\n2-Ver afiliaciones existentes\n3-Salir")

    while(isNaN(menu)){
        menu = prompt("Bienvenido a la calculadora de comisión por afiliaciones. \n Por favor elija una opción: \n1-Ingresar nueva afiliación\n2-Ver afiliaciones existentes\n3-Salir")
    }
    if(menu == 1){
        agregarAfiliados();
    }
    



//FUNCIÓN PARA AGREGAR AFILIACIONES SELECCIONAR PRIMERO LA CANTIDAD DE AFILIACIONES A AGREGAR Y LUEGO IR COMPLETANDOLAS
function agregarAfiliados(Afiliado){
    let afiliaciones = [];
    let numeroAfiliaciones = parseInt(prompt("Ingrese la cantidad de afiliados a agregar:"));

    for(let index= 0; index < numeroAfiliaciones; index++);{
        let nombreApellido = prompt("Ingrese nombre y apellido").toUpperCase();
        let edad = comisionEdad();             //parseInt(prompt("Ingrese la edad"));
        let mail = comisionMail();
        let cedula = comisionCedula();
        let ingresos = parseInt(prompt("Ingrese el sueldo nominal"));

        let afiliadoARegistrar = new Afiliado(
            nombreApellido, 
            edad, 
            mail, 
            cedula, 
            ingresos
        );
        afiliaciones.push(afiliadoARegistrar); 
    }
}

//ESTA FUNCION ESTABLECE LAS COMISIONES POR EDAD DEL AFILIADO
function comisionEdad(){
    let edad = parseInt(prompt("Ingrese la edad"));
    while(isNaN(edad)){
        edad = parseInt(prompt("Ingrese la edad"));
    }
    if (edad <18){
        alert("El afiliado tiene que ser mayor de edad");
    }
    else if (edad >=18 && edad <=20){
        comisionEdad = 600;
    }
    else if (edad >=21 && edad <=25){
        comisionEdad = 500;
    }
    else if (edad >=26 && edad <=30){
        comisionEdad = 200;
    }
    else{
        comisionEdad = 0;
    }
    return comisionEdad;
}


//FUCIÓN PARA CALCULAR LA COMISIÓN SI EL AFILIADO QUIERE ESTADO DE CUENTA POR MAIL
function comisionMail(){
    let comisionMail = 0;
    let mail = prompt("El Afiliado aporta e-mail SI/NO").toUpperCase();
    while(!isNaN(mail)){
        mail = prompt("El Afiliado aporta e-mail SI/NO").toUpperCase();
    }
    if(mail == "SI"){
        comisionMail = 120;
    }
    else{
        comisionMail = 0;
    }
    return comisionMail;
}

//FUCIÓN PARA CALCULAR LA COMISIÓN SI EL AFILIADO APORTA LA FOTO DE SU CÉDULA DE IDENTIDAD
function comisionCedula(){
    let comisionCedula = 0;
    let cedula = prompt("El Afiliado aporta foto de Cédula SI/NO").toUpperCase();
    while(!isNaN(cedula)){
        cedula = prompt("El Afiliado aporta e-mail SI/NO").toLocaleUpperCase();
    }
    if(cedula == "SI"){
        comisionCedula = 200;
    }
    else{
        comisionCedula = 0;
    }
    return comisionCedula;
}


function main(){
    let afiliado = Afiliado();
    let comisionEdad = comisionEdad();
    let comisionMail = comisionMail();
    let comisionCedula = comisionCedula();
}

datosAfiliado();