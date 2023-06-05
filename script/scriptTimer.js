
let timer2 = null;
let paradoTimer = null;
let timerText = document.getElementById('timer-text');
const aviso = document.getElementById('attention-text');
const divSetTimer = document.getElementById('set-timer');
const divTimerOn = document.getElementById('timer-on');


let condicao = null;
let checado = null;
let escondido = null; 

let horasTimer = 0;
let minutosTimer = 0;
let segundosTimer = 0;

console.log(aviso)

function esconderAviso(){
	aviso.style.display = "none";
}

function dispararAviso(){
	horasTimer = document.getElementById('horasTimer').value;
	minutosTimer = document.getElementById('minutosTimer').value;
	segundosTimer = document.getElementById('segundosTimer').value;


	console.log(horasTimer)

	const conditionNumerosInvalidos = horasTimer > 23 || minutosTimer > 59 || segundosTimer > 59 || horasTimer < 0 || minutosTimer < 0 || segundosTimer < 0
	const conditionNumerosZeros =  horasTimer == 0 && minutosTimer == 0 && segundosTimer == 0
	const conditionGeral = conditionNumerosInvalidos || conditionNumerosZeros;

	console.log(conditionNumerosInvalidos)
	console.log(conditionNumerosZeros)
	console.log(conditionGeral)

	if (conditionGeral) {
		aviso.style.display = "block";
		setTimeout(esconderAviso, 4000);
	
	}else{
		checado = true;
	}

	return conditionGeral;

}

function diminuirTempo(){
	if (segundosTimer != 0){
		segundosTimer--;
		if (segundosTimer == 0){
			if (minutosTimer != 0){
				minutosTimer--;
				segundosTimer = 59;
				if (minutosTimer == 0){
					if (horasTimer != 0){
						horasTimer--;
						minutosTimer = 59;	
					}else{
						horasTimer = 0;
						minutosTimer = 0;					
					}
				}
			}else{
				if (horasTimer != 0){
					horasTimer--;
					minutosTimer = 59;
					segundosTimer = 59;	
				}else{
					console.log("Cheguei");
					horasTimer = 0;
					minutosTimer = 0;
					segundosTimer = 0;
					clearInterval(timer2);
					timer2 = null;
					paradoTimer = null;
					checado = null;
					condicao = null;
					}
			}
		}
	}else{
		if (minutosTimer != 0){
			minutosTimer--;
			segundosTimer = 59;
			if (minutosTimer == 0){
				if (horasTimer != 0){
					horasTimer--;
					minutosTimer = 59;	
				}else{
					horasTimer = 0;
					minutosTimer = 0;					
				}
			}
		}else{
			if (horasTimer != 0){
				horasTimer--;
				minutosTimer = 59;
				segundosTimer = 59;	
			}else{
				horasTimer = 0;
				minutosTimer = 0;
				segundosTimer = 59;
			}
		}		
	}

	horasTimerDisplay = horasTimer < 10 ? "0" + horasTimer : horasTimer;
	minutosTimerDisplay = minutosTimer < 10 ? "0" + minutosTimer : minutosTimer;
	segundosTimerDisplay = segundosTimer < 10 ? "0" + segundosTimer : segundosTimer;

	timerText.innerHTML = `${horasTimerDisplay}:${minutosTimerDisplay}:${segundosTimerDisplay}`
}

function comecarTimer(){
	console.log("botão clicado");
	if (checado === null){
		condicao = dispararAviso();
	}

	if (!condicao && !escondido){
		divSetTimer.style.display = "none";

		divTimerOn.style.display = "flex";
		divTimerOn.style.flexDirection = "column";
		divTimerOn.style.alignItems = "center";
		divTimerOn.style.justifyContent = "center";

		escondido = true;

		horasTimerDisplay = horasTimer < 10 ? "0" + horasTimer : horasTimer;
		minutosTimerDisplay = minutosTimer < 10 ? "0" + minutosTimer : minutosTimer;
		segundosTimerDisplay = segundosTimer < 10 ? "0" + segundosTimer : segundosTimer;

		timerText.innerHTML = `${horasTimerDisplay}:${minutosTimerDisplay}:${segundosTimerDisplay}`
	}

	if (!condicao){
		if (timer2 !== null  && paradoTimer !== "yes"){
			clearInterval(timer2);
			timer2 = null;
			paradoTimer = null;
		}else if(timer2 !== null  && paradoTimer == "yes"){
			timer2 = setInterval(diminuirTempo, 1000);
			paradoTimer = null;
		}else{
			timer2 = setInterval(diminuirTempo, 1000);
			console.log(timer2)
		}
	}

}



function pararTimer(){
	if (timer2 !== null){
		clearInterval(timer2);
		paradoTimer = "yes";
	}

}


function resetarTimer(){

	divTimerOn.style.display = "none";

	divSetTimer.style.display = "flex";
	divSetTimer.style.flexDirection = "column";
	divSetTimer.style.alignItems = "center";
	divSetTimer.style.justifyContent = "center";

	escondido = null;

	clearInterval(timer2);
	timer2 = null;
	paradoTimer = null;
	checado = null;
	condicao = null;
	[horasTimer, minutosTimer, segundosTimer] = [0,0,0];
	timerText.innerHTML = "00:00:00"

}