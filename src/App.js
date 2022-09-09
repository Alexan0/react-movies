import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import { Header } from './components';
import { CategoriesPage, Home, NotFound, ItemMoviePage, ComingSoon } from "./pages";

export const SearchContext = React.createContext();

function App() {
	const [searchValue, setSearchValue] = React.useState('');

	return (
		<HashRouter>
			<div className='wrapper'>
				<SearchContext.Provider value={{ searchValue, setSearchValue }}>
					<Header />
					<main className="page">
						<Routes>
							<Route exact path='/' element={<Home searchValue={searchValue} />} />
							<Route exact path="/coming-soon" element={<ComingSoon searchValue={searchValue} />} />
							<Route exact path="/categories" element={<CategoriesPage searchValue={searchValue} />} />
							<Route exact path={'/categories/current/movie/:id'} element={<ItemMoviePage/>} />
							<Route exact path='*' element={<NotFound />} />
						</Routes>
					</main>
				</SearchContext.Provider>
			</div>
		</HashRouter>
	);
}

export default App;
