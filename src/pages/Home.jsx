import React from 'react';
import { Intro, Movies } from '../components';

function Home({ searchValue }) {
	return (
		<> 
			{!searchValue && <Intro />}
			<Movies searchValue={searchValue}/>
		</>
	)
}

export default Home;