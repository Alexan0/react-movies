import React from 'react';

function ComingSoonMovie({ name, photo, categoryName }) {
	return (
		<div className="item-coming-soon__column">
			<a href='-' className="item-coming-soon__item">
				<div className="item-coming-soon__photo">
					<img src={photo}></img>
				</div>
				<div className="item-coming-soon__info">
					<div className="item-coming-soon__title">{name}</div>
					<div className="item-coming-soon__category">{categoryName}</div>
				</div>
			</a>
		</div>
	)
}

export default ComingSoonMovie;