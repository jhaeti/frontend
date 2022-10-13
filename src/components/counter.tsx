import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store/hooks";
import {increment, decrement, incrementByAmount} from "../redux/counter/slice";

const Counter = () => {
	const count = useAppSelector((state) => state.counter.value);

	const [incrementAmount, setIncrementAmount] = useState("2");
	const dispatch = useAppDispatch();
	return (
		<div>
			<div
			// className={styles.row}
			>
				<button
					// className={styles.button}
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
				<span
					// className={styles.value}
					suppressHydrationWarning
				>
					{count}
				</span>
				<button
					// className={styles.button}
					aria-label="Increment value"
					onClick={() => {
						dispatch(increment());
					}}
				>
					+
				</button>
			</div>
			<div
			// className={styles.row}
			>
				<input
					// className={styles.textbox}
					aria-label="Set increment amount"
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					// className={styles.button}
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount)))
					}
				>
					Add Amount
				</button>
				<button
				// className={styles.asyncButton}
				// onClick={() => dispatch(incrementAsync(incrementValue))}
				>
					Add Async
				</button>
				<button
				// className={styles.button}
				// onClick={() => dispatch(incrementIfOdd(incrementValue))}
				>
					Add If Odd
				</button>
			</div>
		</div>
	);
};

export default Counter;
