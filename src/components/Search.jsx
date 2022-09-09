import React from 'react';
import { SearchContext } from '../App';

function Search() {
	const { searchValue, setSearchValue } = React.useContext(SearchContext);

	return (
		<div className="header__search">
			<input onChange={(elem) => setSearchValue(elem.target.value)} value={searchValue} type="text" placeholder="Search movie..."></input>
			<button type="button" className="header__search-button"></button>
		</div>
	)
}

export default Search;