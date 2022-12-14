const defaultState = {
	isTicking: false,
	time: 0,
	results: [],
	contestants: []
}

export default function stopwatchReducer(state = defaultState, action) {
	switch (action.type) {
		case 'STOPWATCH_TICK':
			return {
				...state,
				isTicking: true,
				time: state.time + 1
			}
		case 'STOPWATCH_STOP':
			return {
				...state,
				isTicking: false,
				time: state.time,
			}
		case 'STOPWATCH_RESET':
			return {
				...state,
				isTicking: false,
				time: 0,
				results: [],
				contestants: []
			}
		case 'STOPWATCH_LAP':
			return {
				...state,
				results: [...state.results, action.timestamp],
			}
		case 'ADD_CONTESTANT':
			return {
				...state,
				contestants: [...state.contestants, action.contestant]
			}
		default:
			return state;
	}
}