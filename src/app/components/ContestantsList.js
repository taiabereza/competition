import { useSelector } from "react-redux";
import Contestant from "./Contestant";

export default function ContestantsList() {

	const results = useSelector(state => state.results);
	const contestants = useSelector(state => state.contestants);

	return (
		<div className="contestants">
			{results.map((result, i) => {
				return (
					<Contestant number={i}
						result={result}
						contestant={contestants[i]}
					/>
				)
			})}
		</div>
	)
}