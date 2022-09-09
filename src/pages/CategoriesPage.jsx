import React from 'react';
import { Movies } from '../components';


function CategoriesPage({searchValue}) {
	return (
			<Movies searchValue={searchValue}/>
	)
}

export default CategoriesPage;