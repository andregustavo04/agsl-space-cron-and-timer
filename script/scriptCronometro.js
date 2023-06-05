
// array destructuring
let [horas, minutos, segundos] = [0,0,0];
var timer = null;
let cronometro = document.getElementById('cron');
let parado = null;

function mudarParaTimer() {
	const cronometroDiv = document.getElementById('div-cron');
	cronometroDiv.style.display = 'none';

	const timerDiv = document.getElementById('div-timer');
	timerDiv.style.display = 'flex';
	timerDiv.style.flexDirection = 'column';
	timerDiv.style.alignItems = 'center';
	timerDiv.style.justifyContent = 'center';

}

function mudarParaCronometro() {
	const timerDiv = document.getElementById('div-timer');
	timerDiv.style.display = 'none';

	const cronometroDiv = document.getElementById('div-cron');
	cronometroDiv.style.display = 'flex';
	cronometroDiv.style.flexDirection = 'column';
	cronometroDiv.style.alignItems = 'center';
	cronometroDiv.style.justifyContent = 'center';
}

function contar(){
	segundos++

	if(segundos == 60){
		segundos = 0;
		minutos++
		if (minutos == 60){
			minutos = 0;
			horas++
		}
	}

	let horasDisplay = horas < 10 ? "0" + horas : horas;
	let minutosDisplay = minutos < 10 ? "0" + minutos : minutos;
	let segundosDisplay = segundos < 10 ? "0" + segundos : segundos;

	cronometro.innerHTML = `${horasDisplay}:${minutosDisplay}:${segundosDisplay}`
	console.log(timer)
	console.log(parado)

}

function comecarContagem(){
	if (timer !== null  && parado !== "yes"){
		clearInterval(timer);
		timer = null;
		parado = null;
	}else if(timer !== null  && parado == "yes"){
		timer = setInterval(contar, 1000);
		parado = null;
	}else{
		timer = setInterval(contar, 1000);
	}
}

function resetar(){
	[horas, minutos, segundos] = [0,0,0];
	clearInterval(timer);
	timer = null;
	parado = null;
	cronometro.innerHTML = "00:00:00"
}


function parar(){
	if (timer !== null){
		clearInterval(timer);
		// console.log(timer);
		parado = "yes";
	}
}

console.log(parado);
console.log(timer);