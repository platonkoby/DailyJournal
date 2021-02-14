import React, { useState, useEffect } from 'react';
import DailyContext from '../contexts/DailyContext';
import Right from './Right';
import Left from './Left';
import Center from './Center';
import useLocalStorage from '../hooks/useLocalStorage';

function Main() {
	const [ item, setItem ] = useState(null);
	const [ storageItems, updateItems ] = useLocalStorage('allItems');
	const [ currentItems, setCurrentItems ] = useState(storageItems);
	const [ storageDone ] = useLocalStorage('done');
	const [ doneItems, setDoneItems ] = useState([]);
	const [ undoneItems, setUndoneItems ] = useState([]);
	const [ restart, setRestart ] = useState(false);

	const newDay = (bool) => {
		setRestart(bool);
	};
	const toDone = (item) => {
		item.undone = 'green';
		setDoneItems((i) => [ ...i, item ]);
		setCurrentItems((i) => i.filter((el) => el.id !== item.id));
		updateItems('done', item);
	};

	const removerFromDone = (item) => {
		let items = doneItems.filter(({ id }) => item.id !== id);
		setDoneItems(items);
		updateItems('delete', items);
	};

	useEffect(
		() => {
			if (item !== null) {
				updateItems('update', item, 'allItems');
				setCurrentItems((c) => [ ...c, item ]);
			}
		},
		[ item ]
	);
	useEffect(
		() => {
			setDoneItems(storageDone);
		},
		[ storageDone ]
	);
	useEffect(
		() => {
			if (restart) {
				setUndoneItems(currentItems);
				let items = doneItems.map((item) => {
					item.undone = 'grey';
					return item;
				});
				setCurrentItems((i) => [ ...i, ...items ]);
				setDoneItems([]);
				updateItems('restart');
				setRestart(false);
			}
		},
		[ restart ]
	);

	const selectItem = (newItem) => {
		setItem(newItem);
	};
	if (storageItems === null) {
		return <h1>Loading</h1>;
	}
	return (
		<DailyContext.Provider value={{ selectItem, item, newDay, toDone, restart, doneItems, removerFromDone }}>
			<div className="main">
				<Left doneItems={doneItems} />
				<Center
					currentItems={currentItems}
					undoneItems={undoneItems}
					changeCurrent={(items) => setCurrentItems(items)}
				/>
				<Right />
			</div>
		</DailyContext.Provider>
	);
}
export default Main;
