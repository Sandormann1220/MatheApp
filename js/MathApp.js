window.onload = function(){
			
			let btn_cal     	=        	document.getElementById('verificacion');
			let btn_table   	=		  	document.getElementById('cal__btn');
			let btn_nueva   	=        	document.getElementById('nuevaMulti');
			let btn_iniciar 	=        	document.getElementById('iniciar');

			let result_1    	= 		  	document.getElementById('res__1');
			let result_2    	= 		  	document.getElementById('res__2');
			let result      	=		  	document.getElementById('result');

			let text        	=        	document.getElementById('line_text');
			let text2       	=        	document.getElementById('line_text2');

			let num1       		=			document.getElementById('num__1');
			let num2			=			document.getElementById('num__2');
			
			num1.innerHTML = 0;
			num2.innerHTML = 0;
			
			btn_nueva.style.display = "none";
			btn_cal.style.display = "none";
			
			result_1.value = " ";
			result_2.value = " ";
			result.value = " ";

			//Iniciar

			btn_iniciar.addEventListener('click', ()=> {
				
				let multiplicando 	= numMultiplicando();
				let multiplicador	= numMultiplicador()
				
				num1.innerHTML = multiplicando;
				num2.innerHTML = multiplicador;

				btn_cal.style.display = "block";
				btn_iniciar.style.display = "none";

				btn_cal.style.background = "green";

				result_1.value = " ";
				result_2.value = " ";
				result.value = " ";

			});

			//Verificar

			btn_cal.addEventListener('click',()=>{
							
					suma = (parseInt(result_1.value) + parseInt(result_2.value)*10);
					console.log(suma)
					
					if(suma === parseInt(result.value)){

						text.style.display = "block";
						text.innerHTML = "Felicidades: tu resultado está correcto.";
						btn_cal.style.display = "none";
						result_1.disabled = true;
						result_2.disabled = true;
						result.disabled = true;
						btn_nueva.style.display = "block";
						btn_nueva.style.background = "blue";
						text2.style.display = "none";
					
					}else{
						text2.style.display = "block";
						text2.innerHTML = "Revisa tu respuesta.";
					}
				});

				btn_table.addEventListener('click', ()=>{
					let num = document.getElementById('cal__tabla__num');
					let table = document.getElementById('tabla');
					var cadena ="";
					for(var i = 1; i <= 10; i++) {
						cadena += num.value + "  x  " + [i] + " = " +"  " + i *num.value+"<br>";
					}
					table.innerHTML = cadena;
					num.value = " ";
				});
					
				//Nueva

				btn_nueva.addEventListener('click',()=>{
					
					let multiplicando 	= numMultiplicando();
					let multiplicador	= numMultiplicador()
				
					num1.innerHTML = multiplicando;
					num2.innerHTML = multiplicador;

					text.style.display = "none";

					result_1.disabled = false;
					result_2.disabled = false;
					result.disabled = false;

					result_1.value = " ";
					result_2.value = " ";
					result.value = " ";

					btn_cal.style.display = "block";
					btn_nueva.style.display = "none";
				});
		}
		
		function numMultiplicando(){
			return Math.floor(Math.random()*1000);
		}
		
		function numMultiplicador(){
			return Math.floor(Math.random()*100);
		}