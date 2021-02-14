import React, { useContext } from 'react';
import ItemFrame from './ItemFrame';
import { MdDeleteForever } from 'react-icons/md';
import DailyContext from '../contexts/DailyContext';

function Left({ doneItems }) {
	const { removerFromDone } = useContext(DailyContext);

	return (
		<div className="part left">
			<h2 className="header">Done</h2>
			<section className="done">
				{doneItems.map((item) => (
					<div className="item-done" key={item.id}>
						<MdDeleteForever className="bin" onClick={() => removerFromDone(item)} />
						<ItemFrame item={item} />
					</div>
				))}
			</section>
		</div>
	);
}

export default Left;
