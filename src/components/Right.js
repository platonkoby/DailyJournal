import React, { useContext, useReducer, useRef } from 'react';
import DailyContext from '../contexts/DailyContext';
import { nanoid } from 'nanoid';

function reducer(state, action) {
	if (action.type === 'setTitle') {
		return { ...state, title: action.data };
	}
	if (action.type === 'setDescription') {
		return { ...state, description: action.data };
	}
	if (action.type === 'endDate') {
		return { ...state, endDate: new Date(action.data).toLocaleDateString() };
	}
	if (action.type === 'refresh') {
		return { title: '', description: '', endDate: '' };
	} else {
		console.warn('Something went wrong in reducer');
		return state;
	}
}

function Right() {
	const { selectItem } = useContext(DailyContext);
	const [ state, dispatch ] = useReducer(reducer, { title: '', description: '', endDate: '' });
	const { title, description, endDate } = state;
	const refTitle = useRef();
	const refDescription = useRef();
	const refEndDate = useRef();

	const handleSubmit = (e) => {
		refTitle.current.value = '';
		refDescription.current.value = '';
		refEndDate.current.value = '';
		dispatch({ type: 'refresh' });
		e.preventDefault();
		selectItem({
			title,
			description,
			endDate,
			creationDate: new Date().toLocaleDateString(),
			id: nanoid(),
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
						<input
							ref={refTitle}
							name="title"
							onChange={(e) => dispatch({ type: 'setTitle', data: e.target.value })}
						/>
					</div>
					<textarea
						ref={refDescription}
						placeholder="description"
						name="desription"
						cols="30"
						rows="10"
						onChange={(e) => dispatch({ type: 'setDescription', data: e.target.value })}
					/>
					<div className="form-end">
						<label htmlFor="end">End date</label>
						<input
							ref={refEndDate}
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

/*function* idGenerator() {
	let start = JSON.parse(localStorage.getItem('items'));
	console.log(start);
	if (start === null || start.length === 0) {
		start = 0;
	} else {
		start = start[start.length - 1];
		start = start.id + 1;
	}

	while (true) {
		yield start++;
	}
}*/
