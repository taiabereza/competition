import { formatTime } from "../functions";
import Badge from 'react-bootstrap/Badge';
import Alert from "react-bootstrap/Alert";

export default function Contestant({ number, result, contestant }) {

	const addBadge = (num) => {
		switch (num) {
			case 0:
				return <Badge bg="success">#{num + 1}</Badge>
			case 1:
				return <Badge bg="warning" text="dark">#{num + 1}</Badge>
			case 2:
				return <Badge bg="danger">#{num + 1}</Badge>
			default:
				return <Badge bg="secondary">#{num + 1}</Badge>
		}
	};

	const useVariant = (num) => {
		switch (num) {
			case 0:
				return 'success';
			case 1:
				return 'warning';
			case 2:
				return 'danger';
			default:
				return 'dark';
		}
	}

	return (
		<Alert key={number} variant={useVariant(number)} className="contestant">
			<p className="name">
				{addBadge(number)} {contestant}
			</p>
			<div className="result_time">
				Resulting time: {formatTime(result)}
			</div>
		</Alert>
	)
}