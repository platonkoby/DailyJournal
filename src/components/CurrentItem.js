import React, { useState, useContext } from 'react';
import ItemFrame from './ItemFrame';
import ItemDetails from './ItemDetails';
import { FaCheckCircle } from 'react-icons/fa';
import DailyContext from '../contexts/DailyContext';

function CurrentItem({ item, currentItems }) {
	const { toDone, restart } = useContext(DailyContext);
	const [ hover, setHover ] = useState('hide');
	const mouseOver = () => {
		setHover('');
	};
	const mouseOut = () => {
		setHover('hide');
	};
	return (
		<React.Fragment>
			<div className="item-current">
				<FaCheckCircle className="check" onClick={() => toDone(item)} />
				<ItemFrame
					item={item}
					mouseOut={mouseOut}
					mouseOver={mouseOver}
					currentItems={currentItems}
					restart={restart}
				/>
			</div>
			<ItemDetails item={item} hover={hover} />
		</React.Fragment>
	);
}

export default CurrentItem;
