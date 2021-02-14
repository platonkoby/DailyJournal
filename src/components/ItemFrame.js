import React, { useEffect, useState } from 'react';

function ItemFrame({ item, currentItems, restart, doneItems }) {
	const { title } = item;
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
		<div className="item-frame">
			<h2>{title}</h2>
			<div className={`status ${notDone}`} />
		</div>
	);
}

export default ItemFrame;
