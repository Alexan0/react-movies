import React from 'react';

function Categories({ value, onClickCategories }) {
	const categoriesName = ['All movie', 'Action', 'Thriller', 'Melodrama', 'Comedy'];

	return (
		<div className="top-movies__categories movie-categories">
			<ul className="movie-categories__lsit">
				{
					categoriesName && categoriesName.map((elemName, elemIndex) => (
						<li
							className={value === elemIndex ? 'movie-categories__item active' : 'movie-categories__item'}
							key={`${elemName} ${elemIndex}`}
							onClick={() => onClickCategories(elemIndex)}
						>
							{elemName}
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Categories;