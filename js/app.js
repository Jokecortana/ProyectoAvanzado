//slide de imagenes
window.addEventListener('load',function(){
	console.log("contenido cargado");

	var img=[];

	img[0]='img/runm.jpg';
	img[1]='img/runm3.jpg';
	img[2]='img/runm2.jpg';

	var indice=0;

	function cambioImg(){

		document.slide.src=img[indice];

		if(indice<2){
			indice++;

		}else{
			indice=0;

		}
}

	setInterval(cambioImg, 2000);

	
});


//box

opcion =confirm("Felicidades! Te has ganado un cupon de descuento, para obtenerlo oprime aceptar")
console.log(opcion)
if (opcion==true){
nombre = prompt("Ingresa tu nombre")
console.log(nombre)



var correo = prompt("Ingresa tu correo: ")
console.log(correo)

	opcion=confirm("Gracias, tu codigo sera enviado a la direccion de correo proporcionada!");

}alert("Gracias");


//inicio en js

function Mostrar(){
	document.getElementById("mapa")
}

function Ocultar(){
	document.getElementById("mapa")
}




