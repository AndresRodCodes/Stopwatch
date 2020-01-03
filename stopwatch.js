// Define variables to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define vars to hold displayed values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Define variable to hold setInterval() function
var interval = null;

// Define variable to hold the staus of the stopwatch
var isOn = false;

// Stopwatch function (Logic to determine when to increment next value)
function stopwatch() {
	seconds++;
	if (seconds / 60 == 1) {
		seconds = 0;
		minutes++;
		if (minutes / 60 == 1) {
			minutes = 0;
			hours++;
		}
	}

	// If seconds/minutes/hours are only one digit, add a leading zero
	if (seconds < 10) {
		displaySeconds = '0' + seconds.toString();
	} else {
		displaySeconds = seconds;
	}

	if (minutes < 10) {
		displayMinutes = '0' + minutes.toString();
	} else {
		displayMinutes = minutes;
	}

	if (hours < 10) {
		displayHours = '0' + hours.toString();
	} else {
		displayHours = hours;
	}

	document.getElementById('time').innerHTML = displayHours + ' : ' + displayMinutes + ' : ' + displaySeconds;
}

function startStop() {
	if (isOn) {
		window.clearInterval(interval);
		document.getElementById('startStopBtn').innerHTML = 'Start';
		isOn = false;
	} else {
		interval = window.setInterval(stopwatch, 1000);
		document.getElementById('startStopBtn').innerHTML = 'Stop';
		isOn = true;
	}
}
