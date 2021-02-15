import React, { useState } from 'react';
function useLocalStorage(data = 'allItems') {
	const [ allItems, setItems ] = useState(JSON.parse(localStorage.getItem(data)));
	if (allItems === null) {
		setItems([]);
		localStorage.setItem(data, JSON.stringify([]));
	}

	function updateItems(method, item, data) {
		if (method === 'update') {
			let items = [ ...allItems, item ];
			localStorage.setItem(data, JSON.stringify(items));
			setItems(JSON.parse(localStorage.getItem(data)));
		}

		if (method === 'done') {
			let current = JSON.parse(localStorage.getItem('allItems'));
			current = current.filter((i) => i.id !== item.id);
			localStorage.setItem('allItems', JSON.stringify(current));
			let done = JSON.parse(localStorage.getItem('done'));
			if (done === null) done = [];
			done.push(item);
			localStorage.setItem('done', JSON.stringify(done));
			setItems(current);
		}

		if (method === 'restart') {
			let all = JSON.parse(localStorage.getItem('items'));
			all = all.map((item) => {
				if (item.undone === 'red' || item.undone === 'grey') {
					item.undone = 'red';
				} else {
					item.undone = 'grey';
				}
				return item;
			});
			localStorage.setItem('done', '[]');
			localStorage.setItem('allItems', JSON.stringify(all));
			setItems(all);
		}
		if (method === 'delete') {
			localStorage.setItem('done', JSON.stringify(item));
		}
		const current = JSON.parse(localStorage.getItem('allItems'));
		const done = JSON.parse(localStorage.getItem('done'));
		const all = current.concat(done);
		localStorage.setItem('items', JSON.stringify(all));
	}
	return [ allItems, updateItems ];
}
export default useLocalStorage;
