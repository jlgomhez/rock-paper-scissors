//obtener mis referencias
const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const psPlayerResult = document.getElementById('playerResult');
const psComputerResult = document.getElementById('computerResult');
const psGanador = document.getElementById('ganador');

const psPoints = document.getElementById('points');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras'];//0, 1, 2
const fileNames = {
	'piedra':'images/rock.png',
	'papel':'images/paper.png',
	'tijeras':'images/scissors.png',
};

let Score = 0;
//agregar evento que escuche al click a los botones
buttons.forEach((button) => button.addEventListener('click', startGame));

//funcion que inicia el juego
function startGame (event){
	//determinar la eleccion del jugador
	const button = event.currentTarget
	const playerChoice = button.dataset.choice;
	console.log(playerChoice);

	//determinar la eleccion de la computadora
	const computerChoice = getComputerChoice();
	console.log(computerChoice);

	//determinar quien gana
	const winner = defineWinner(playerChoice, computerChoice);
	console.log (`El ganador es ${winner}`);

	//mostrar resultados
	imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

	if (winner === 'player') {
		psGanador.textContent = `Tú ganas,`;
		psPlayerResult.textContent = `${playerChoice}`;
		psComputerResult.textContent = `${computerChoice}`;
		++Score;
		psPoints.textContent = Score;
	} else if (winner === 'computer') { 
		psGanador.textContent = `La computadora gana,`;
		psPlayerResult.textContent = `${playerChoice}`;
		psComputerResult.textContent = `${computerChoice}`;
		--Score;
		psPoints.textContent = Score;
	} else { //empate
		psGanador.textContent = `Tu empatas,`;
		psPlayerResult.textContent = `${playerChoice}`;
		psComputerResult.textContent = `${computerChoice}`;
	}

}

function getComputerChoice () {
	//obtener un valor aleatorio i (0, 1, 2)
	const i = parseInt(Math.random()*3);
	//devolver piedra, papel o tijeras
	return choices[i];
}

function defineWinner (playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return null;
	}

	if (playerChoice === 'piedra') {
		if (computerChoice === 'papel') {
			return 'computer';
		}	else {//tijeras
			return 'player';
		}
	} else if (playerChoice === 'papel') {
		if (computerChoice === 'tijeras') {
			return 'computer';
		}	else {//piedra
			return 'player';
		}
	} else {
		if (computerChoice === 'piedra') {
			return 'computer';
		}	else {//papel
			return 'player';
		}
	}
}