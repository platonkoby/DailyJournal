import '../styles/center.css';
import '../styles/itemFrame.css';
import React, { useContext, useEffect, useState } from 'react';
import CurrentItem from './CurrentItem';

import Timer from './Timer';

function Center({ currentItems, undoneItems, changeCurrent }) {
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
					<div key={item.id} className="item-wrapper">
						<CurrentItem item={item} currentItems={currentItems} />
					</div>
				))}
			</section>
		</div>
	);
}

export default Center;
