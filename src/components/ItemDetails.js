import React from 'react';

function ItemDetails({ item, hover }) {
	return (
		<div className={`details ${hover}`}>
			<h3 className="detail-title">{item.title}</h3>
			<div className="description">
				<h4>description</h4>
				<p>{item.description}</p>
			</div>
			<div className="endDate">
				<h4>End Date</h4>
				<p>{item.endDate}</p>
			</div>
		</div>
	);
}

export default ItemDetails;
