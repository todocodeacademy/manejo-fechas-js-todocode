var fecha = new Date(1991, 10, 23);
//var fecha = new Date("05/25/2023");

//funciones especiales
var dia = fecha.getDate();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

alert("Día: " + dia + " Mes: " + (mes+1) + " Año: " + anio);
