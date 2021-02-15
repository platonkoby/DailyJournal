import React, { useEffect, useState, useRef } from 'react';
import { FaHandMiddleFinger } from 'react-icons/fa';

function ItemFrame({ item, currentItems, mouseOver, mouseOut }) {
	const { title, description, endDate } = item;
	const [ notDone, setNotDone ] = useState('grey');

	useEffect(
		() => {
			if (currentItems !== undefined) {
				const currentUndone = currentItems.filter(({ undone }) => undone === 'red');
				const undone = currentUndone.find(({ id }) => item.id === id);
				if (undone !== undefined) {
					setNotDone('red');
				}
			}
			if (item.undone === 'green') {
				setNotDone('green');
			}
		},
		[ currentItems ]
	);
	useEffect(() => {
		setNotDone(item.undone);
	}, []);

	return (
		<React.Fragment>
			<div className="item-frame" onMouseOver={mouseOver} onMouseOut={mouseOut}>
				<h2>{title}</h2>
				<div className={`status ${notDone}`} />
			</div>
		</React.Fragment>
	);
}

export default ItemFrame;
