var h3 = document.getElementById('timer');
var start = document.getElementById('start');
var stop = document.getElementById('stop');

var seconds = 0;
var minutes = 0;
var hours = 0;
var t;

function add() {
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}

	h3.textContent =
		(hours ? (hours > 9 ? hours : '0' + hours) : '00') +
		':' +
		(minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
		':' +
		(seconds > 9 ? seconds : '0' + seconds);

	timer();
}

function timer() {
	t = setTimeout(add, 1000);
}
timer();

start.onclick = timer;

stop.onclick = function() {
	clearTimeout(t);
};
