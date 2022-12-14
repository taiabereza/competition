import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addContestant } from '../store/actions';

export default function ModalTypeName(props) {

	const dispatch = useDispatch();

	const [input, setInput] = useState('');
	const contestants = useSelector(state => state.contestants);

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Type contestant's name
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<input
					type="text"
					autoFocus
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							dispatch(addContestant(input));
							setInput('');
							props.onHide();
						}
					}} />
			</Modal.Body>
			<Modal.Footer>
				<Button variant='light' onClick={() => {
					dispatch(addContestant(input));
					setInput('');
					props.onHide();
				}}>Save</Button>
			</Modal.Footer>
		</Modal>
	);
}