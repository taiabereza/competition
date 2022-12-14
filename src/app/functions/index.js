export function formatTime(time) {
	let milliseconds = Math.floor(time) % 100;
	let seconds = Math.floor(time / 100) % 60;
	let minutes = Math.floor(time / (100 * 60)) % 60;
	let hours = Math.floor(time / (100 * 60 * 60)) % 24;

	let ms = (milliseconds < 10) ? '0' + milliseconds : milliseconds.toString().slice(-2);
	let s = (seconds < 10) ? '0' + seconds : seconds;
	let m = (minutes < 10) ? '0' + minutes : minutes;
	let h = (hours < 10) ? '0' + hours : hours;

	return (
		<>{h}:{m}:{s}<span>.{ms}</span></>
	);
}