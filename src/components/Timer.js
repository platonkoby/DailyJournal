import React, { useReducer, useEffect, useState, useContext } from 'react';
import DailyContext from '../contexts/DailyContext';

function Timer() {
	const { newDay } = useContext(DailyContext);
	const [ hours, setHours ] = useState('0');
	const [ minutes, setMinutes ] = useState('69');
	const [ seconds, setSeconds ] = useState('0');

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setMinutes(date.getUTCMinutes());
			setHours(date.getUTCHours());
			setSeconds(date.getUTCSeconds());
		}, 1000);
	}, []);
	useEffect(
		() => {
			if (`${hours}${minutes}${seconds}` === '800') {
				newDay(true);
			}
		},
		[ seconds ]
	);
	return (
		<div className="header">
			<h2>
				{`${zeroes(hours)}:${zeroes(minutes)}`}
				<span className="seconds"> {`${zeroes(seconds)}`}</span>
			</h2>
		</div>
	);
}

export default Timer;

function zeroes(timeUnit) {
	return timeUnit < 10 ? '0' + new String(timeUnit) : timeUnit;
}
