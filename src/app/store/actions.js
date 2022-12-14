export const stopwatchTick = () => {
	return {
		type: 'STOPWATCH_TICK',
	}
}
export const stopwatchStop = () => {
	return {
		type: 'STOPWATCH_STOP',
	}
}
export const stopwatchReset = () => {
	return {
		type: 'STOPWATCH_RESET',
	}
}
export const stopwatchLap = (timestamp) => {
	return {
		type: 'STOPWATCH_LAP',
		timestamp
	}
}
export const addContestant = (contestant) => {
	return {
		type: 'ADD_CONTESTANT',
		contestant
	}
}