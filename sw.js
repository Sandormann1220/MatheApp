//Variables del cache
const STATIC_CACHE 		= 	'static_v2';
const DYNAMIC_CACHE 	= 	'daynamic_v1';
const INMUTABLE_CACHE 	= 	'inmutable_v1';

//1. Almacenar en el cache

self.addEventListener('install', e => {

	//Abrir el cache
	const cacheStatic = caches.open(STATIC_CACHE)
			.then( cache => {

				return cache.addAll([
					//'/',
					'multiplication.html',
					'css/styles.css',
					'js/app.js',
					'js/MathApp.js'
					]);
			});
	const cacheInmutable = caches.open(INMUTABLE_CACHE)
			.then( cache => {
				return cache.addAll([
					'https://fonts.googleapis.com/css2?family=Laila:wght@300;400&display=swap',
					'https://fonts.googleapis.com/css2?family=Laila:wght@300;400&family=Raleway:ital,wght@0,500;1,500&display=swap'	

					]);
			});
	e.waitUntil([cacheStatic, cacheInmutable]);
});

//2. Borrar el cache viejo

self.addEventListener('activate', e => {

	const respuesta = caches.keys()
			.then(keys => {
				keys.forEach( key => {
					if( key !== STATIC_CACHE && key.includes('static')){
						return caches.delete(key);
					}
					if( key !== DYNAMIC_CACHE && key.includes('dynamic')){
						return caches.delete(key);
					}
				});
			})
	e.waitUntil(respuesta);
});

//3. Instalación del Network witrh Fallback
self.addEventListener('fetch', e => {

		const respuesta = caches.match(e.request)
				.then( res => {
					if(res){
						return res;
					}else{
						return fetch( e.request )
							.then( newRes => {
								caches.open( DYNAMIC_CACHE )
										.then( cache => {
											cache.put(e.request, newRes);
										}); 
							});
					}
				});

});