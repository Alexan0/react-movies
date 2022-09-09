import React from 'react';
import { NavLink } from 'react-router-dom';
import Categories from './Categories';
import MovieItem from './MovieItem';
import Skeleton from './MovieItem/Skeleton';

import Sort from './Sort';

function Movies({ searchValue }) {
	const [movieItems, setMovieItems] = React.useState([]);
	const [isLoading, setIsLoadind] = React.useState(true);

	const [categoriesId, setCategoriesId] = React.useState(0);
	const [sortType, setSortType] = React.useState({
		sortName: 'popularity',
	});

	const category = categoriesId > 0 ? 'category=' + categoriesId : '';
	const sort = sortType.sortName;
	const order = sortType.sortName === 'name' ? 'asc' : 'desc';

	React.useEffect(() => {
		setIsLoadind(true);
		fetch(`https://63076559c0d0f2b8012e7d11.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`)
			.then((res) => {
				return res.json();
			}).then((arr) => {
				setMovieItems(arr)
				setIsLoadind(false)
			})
	}, [categoriesId, sortType])

	const movies = movieItems.filter((obj) => {
		if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	}).map((obj) => (
		<NavLink key={obj.id} className={'item-movie__column'} to={'/categories/current/movie/' + obj.id}>
			<MovieItem key={obj.id} {...obj} />
		</NavLink>
	));
	const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

	return (
		<div className="movies">
			<div className="movies__container container">
				<div className="movies__top top-movies">
					<Categories value={categoriesId} onClickCategories={(i) => setCategoriesId(i)} />
					<Sort value={sortType} onClickSort={(i) => setSortType(i)} />
				</div>
				<div className="movies__content item-movie">
					{
						isLoading ? skeletons : movies
					}
					{
						isLoading ? skeletons : movies.length === 0 && <div className='movies__not-found'>Nothing found</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Movies;