import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "../functions";
import { stopwatchLap, stopwatchReset, stopwatchStop, stopwatchTick } from "../store/actions";
import ModalTypeName from "./ModalTypeName";

export default function Stopwatch() {

	const [modalShow, setModalShow] = useState(false);
	const intervalRef = useRef(null);

	const dispatch = useDispatch();
	const stopwatchStatus = useSelector(state => state.isTicking);
	const timeCount = useSelector(state => state.time);

	const start = () => {
		intervalRef.current = setInterval(() => {
			dispatch(stopwatchTick());
		}, 10)
	};

	const stop = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
		dispatch(stopwatchStop());
	};

	const lap = () => {
		setModalShow(true);
		dispatch(stopwatchLap(timeCount));
	}

	const reset = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
		dispatch(stopwatchReset());
	};

	return (
		<div className="stopwatch_container">
			<div className="stopwatch">{formatTime(timeCount)}</div>
			<div className="buttons">
				<Button
					variant="dark"
					className="p-2"
					disabled={(stopwatchStatus) ? true : false}
					onClick={() => start()}
				>
					Start
				</Button>

				<Button
					variant="dark"
					className="p-2"
					disabled={(!stopwatchStatus) ? true : false}
					onClick={() => stop()}
				>
					Stop
				</Button>

				<Button
					variant="dark"
					className="p-2"
					disabled={(!stopwatchStatus) ? true : false}
					onClick={() => lap()}
				>
					Lap
				</Button>

				<Button
					variant="dark"
					className="p-2"
					onClick={() => reset()}
				>
					Reset
				</Button>
			</div>

			<ModalTypeName show={modalShow}
				onHide={() => {
					setModalShow(false);
				}} />
		</div>
	);
}