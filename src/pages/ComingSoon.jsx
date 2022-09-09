import React from 'react';
import { ComingSoonMovie } from '../components';
import Skeleton from '../components/MovieItem/Skeleton';

function ComingSoon({ searchValue }) {
	const [comingSoonItem, setComingSoonItem] = React.useState([]);
	const [isLoading, setIsLoadind] = React.useState(true);

	React.useEffect(() => {
		setIsLoadind(true);
		fetch('https://63076559c0d0f2b8012e7d11.mockapi.io/coming-soon-movies')
			.then((res) => {
				return res.json()
			}).then((arr) => {
				setComingSoonItem(arr);
				setIsLoadind(false);
			})
	}, []);

	const comingSoonItems = comingSoonItem.filter((obj) => {
		if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		} else {
			return false;
		}
	}).map((obj) => (<ComingSoonMovie key={obj.id} {...obj} />));

	const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

	return (
		<div className='coming-soon'>
			<div className="coming-soon__container container">
				<div className='coming-soon__content item-coming-soon'>
					{
						isLoading ? skeletons : comingSoonItems
					}
				</div>
			</div>
		</div>
	)
}

export default ComingSoon;