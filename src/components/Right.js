import React, { useContext, useReducer } from 'react';
import DailyContext from '../contexts/DailyContext';
import useLocalStorage from '../hooks/useLocalStorage';

const id = idGenerator();

function reducer(state, action) {
	if (action.type === 'setTitle') {
		return { ...state, title: action.data };
	}
	if (action.type === 'setDescription') {
		return { ...state, description: action.data };
	}
	if (action.type === 'endDate') {
		return { ...state, endDate: new Date(action.data).toLocaleDateString() };
	} else {
		console.warn('Something went wrong in reducer');
		return state;
	}
}

function Right() {
	const { selectItem } = useContext(DailyContext);
	const [ state, dispatch ] = useReducer(reducer, { title: '', description: '', endDate: '' });
	const { title, description, endDate } = state;

	const handleSubmit = (e) => {
		e.preventDefault();
		selectItem({
			title,
			description,
			endDate,
			creationDate: new Date().toLocaleDateString(),
			id: id.next().value,
			time: new Date().getTime(),
			undone: 'grey'
		});
	};

	return (
		<div className="part right">
			<h2 className="header">Create</h2>
			<section className="create">
				<form action="#" onSubmit={handleSubmit}>
					<div className="form-title">
						<label htmlFor="title">Title</label>
						<input name="title" onChange={(e) => dispatch({ type: 'setTitle', data: e.target.value })} />
					</div>
					<textarea
						placeholder="description"
						name="desription"
						cols="30"
						rows="10"
						onChange={(e) => dispatch({ type: 'setDescription', data: e.target.value })}
					/>
					<div className="form-end">
						<label htmlFor="end">End date</label>
						<input
							type="date"
							name="end"
							onChange={(e) => dispatch({ type: 'endDate', data: e.target.value })}
						/>
					</div>
					<button>submit</button>
				</form>
			</section>
		</div>
	);
}

export default Right;

function* idGenerator() {
	let start = JSON.parse(localStorage.getItem('items'));
	if (start === null || start.length === 0) {
		start = 0;
	} else {
		start = start[start.length - 1];
		start = start.id + 1;
	}

	while (true) {
		yield start++;
	}
}
