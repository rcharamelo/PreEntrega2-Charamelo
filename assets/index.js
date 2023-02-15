//CLASE PARA CREAR LOS AFILIADOS EN LA OPCIÓN 1
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

//CLASE PARA VER LOS DATOS DE LOS AFILIADOS EN LA OPCIÓN 2
class Nuevo_Afiliado{

    constructor(nombreApellido, edad, mail, cedula, ingresos){
        this.nombreApellido = nombreApellido;
        this.edad = edad;
        this.mail = mail;
        this.cedula = cedula;
        this.ingresos = ingresos;
    } 

    get_datos(){
        console.log("***Datos del Afiliado***");
        console.log("Nombre y apellido: ", this.nombreApellido);
        console.log("Edad: ", this.edad);
        console.log("Aporta e-mail: ", this.mail);
        console.log("Aporta foto de cédula: ", this.cedula);
        console.log("Ingresos nominales: ", this.ingresos);
        console.log("");
    }
}
    
    let afiliado_uno = new Nuevo_Afiliado("Juan Perez" , 25, "SI", "NO", 18000);
    let afiliado_dos = new Nuevo_Afiliado("Juan Perez" , 25, "SI", "SI", 23400);
    let afiliado_tres = new Nuevo_Afiliado("Juan Perez" , 25, "NO", "SI", 43520);

//FUNCIÓN DEL MENÚ PARA SELECCIONAR OPCIÓN
    let menu = prompt("Bienvenido a la calculadora de comisión por afiliaciones. \n Por favor elija una opción: \n1-Ingresar nueva afiliación\n2-Ver afiliaciones existentes\n3-Salir")

    while(isNaN(menu)){
        menu = prompt("Bienvenido a la calculadora de comisión por afiliaciones. \n Por favor elija una opción: \n1-Ingresar nueva afiliación\n2-Ver afiliaciones existentes\n3-Salir")
    }
    if(menu == 1){
        agregarAfiliados();
    }
    if(menu ==2){
        afiliado_uno.get_datos();
        afiliado_dos.get_datos();
        afiliado_tres.get_datos();
    }
    if(menu ==3){
        
    }
    

//FUNCIÓN PARA AGREGAR AFILIACIONES SELECCIONAR PRIMERO LA CANTIDAD DE AFILIACIONES A AGREGAR Y LUEGO IR COMPLETANDOLAS
function agregarAfiliados(){
    let afiliaciones = [];
    let numeroAfiliaciones = parseInt(prompt("Ingrese la cantidad de afiliados a agregar:"));

    for(let index= 0; index < numeroAfiliaciones; index++);{
        let nombreApellido = prompt("Ingrese nombre y apellido").toUpperCase();
        let edad = comisionEdad();
        let mail = comisionMail();
        let cedula = comisionCedula();
        let ingresos = comisionIngresos();

        let afiliadoARegistrar = new Afiliado(
            nombreApellido, 
            edad, 
            mail, 
            cedula, 
            ingresos
        );
        console.log(afiliadoARegistrar);
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

//FUNCIÓN PARA CALCULAR LA COMISIÓN SI EL AFILIADO APORTA LA FOTO DE SU CÉDULA DE IDENTIDAD
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


//FUNCIÓN PARA CALCULAR LA COMISIÓN SEGÚN LOS INGRESOS DEL AFILIADO
function comisionIngresos(){
    let ingresos = parseInt(prompt("Ingrese el sueldo nominal"));
    while(isNaN(ingresos)){
        ingresos = parseInt(prompt("Ingrese el sueldo nominal"));
    }
    if (ingresos <0){
        alert("Los ingresos tienen que ser superiores a 0");
    }
    else if (ingresos >=1 && ingresos <=15000){
        comisionIngresos = 300;
    }
    else if (ingresos >=15001 && ingresos <=25000){
        comisionIngresos = 1000;
    }
    else if (ingresos >=25001 && ingresos <=35000){
        comisionIngresos = 1500;
    }
    else if (ingresos < 35001){
        comisionIngresos = 2500;
    }
    else{
        comisionIngresos = 0;
    }
    return comisionIngresos;
}

function main(){
    let afiliado = Afiliado();
    let comisionEdad = comisionEdad();
    let comisionMail = comisionMail();
    let comisionCedula = comisionCedula();
}


        
