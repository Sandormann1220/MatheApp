//Registro del serviceWorker

// En producción
var url = window.location.href;
var swLocation = '/MatheApp/sw.js';


if(navigator.serviceWorker){

	if( url.includes('localhost')){
		 swLocation = '/sw.js';
	}

	navigator.serviceWorker.register(swLocation);
}
