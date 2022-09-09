import React from 'react';

function ItemMoviePage() {
	const link = window.location.href;
	const currentLinkId = link.slice(47);

	const [currentId, setCurrentId] = React.useState();
	const [movieLoading, setMovieLoading] = React.useState(true);

	React.useEffect(() => {
		setMovieLoading(true)
		fetch(`https://63076559c0d0f2b8012e7d11.mockapi.io/items`)
			.then((res) => {
				return res.json();
			}).then((arr) => {
				setCurrentId(arr)
				setMovieLoading(false)
			})
	}, [])

	const loading = 
		<div className='loading'>
			<div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>;

	const currentMovie = currentId ? currentId[Number(currentLinkId)] : '';

	return (
		<>
			{
				movieLoading ? loading : <div className='item-movie-page'>
					<div className='item-movie-page__container container'>
						<div className='item-movie-page__content current-item-movie'>
							<div className="current-item-movie__image">
								<img src={currentMovie.photo} alt='movie-image'></img>
							</div>
							<div className="current-item-movie__info-main">
								<div className="current-item-movie__title">{currentMovie.name}</div>
								<div className="current-item-movie__description">{currentMovie.description}</div>
							</div>
							<div className="current-item-movie__info-stat">
								<div className="current-item-movie__category">{currentMovie.categoryName}</div>
								<div className="current-item-movie__raiting">{currentMovie.raiting}</div>
								<div className="current-item-movie__duration">{currentMovie.duration} min</div>
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
}

export default ItemMoviePage;

