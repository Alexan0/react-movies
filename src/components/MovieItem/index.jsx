import React from 'react';

function MovieItem({ name, photo, raiting, duration, categoryName, description }) {
	return (
		<div className="item-movie__item">
			<div className="item-movie__photo">
				<img src={photo} alt="movie"></img>
			</div>
			<div className="item-movie__info">
				<h4 className="item-movie__title">{name}</h4>
				<div className="item-movie__info-rait">
					<div className="item-movie__rait">{raiting}</div>
					<div className="item-movie__duration">{duration} min</div>
				</div>
			</div>
			<div className="item-movie__info-hover item-movie-hover">
				<h4 className="item-movie-hover__title">{name}</h4>
				<div className="item-movie-hover__rait">{raiting}</div>
				<div className="item-movie-hover__category">{categoryName}</div>
				<div className="item-movie-hover__desc">{description}</div>
				<div className="item-movie-hover__duration">{duration} min</div>
			</div>
		</div>
	)
}

export default MovieItem;