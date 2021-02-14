import '../styles/center.css';
import React, { useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import DailyContext from '../contexts/DailyContext';
import ItemFrame from './ItemFrame';
import { FaCheckCircle } from 'react-icons/fa';
import Timer from './Timer';

function Center({ currentItems, undoneItems, changeCurrent }) {
	// useLocalStorage();

	const { toDone, restart } = useContext(DailyContext);

	useEffect(
		() => {
			const items = currentItems.map((item) => {
				const undone = undoneItems.filter((el) => el.id === item.id);
				if (undone.length > 0) {
					undone[0].undone = 'red';
					return undone[0];
				}

				return item;
			});
			changeCurrent(items);
		},
		[ undoneItems ]
	);

	return (
		<div className="part center">
			<Timer />
			<section className="current">
				{currentItems.map((item) => (
					<div key={item.id} className="item-current">
						<FaCheckCircle className="check" onClick={() => toDone(item)} />
						<ItemFrame item={item} currentItems={currentItems} restart={restart} />
					</div>
				))}
			</section>
		</div>
	);
}

export default Center;
