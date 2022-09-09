import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from './index';

import headerlogo from '../assets/img/icons/react-header-logo.svg';
const reactLogo = '#react-logo';

function Header() {
	const [iconMenu, setIconMenu] = React.useState();
	const [menuActive, setMenuActive] = React.useState();
	const menuRef = React.useRef();

	const showMenu = (iconMenu) => {
		setMenuActive(!iconMenu)
		setIconMenu(!menuActive)
	}

	const menuHidden = (e) => {
		if (e.path.includes(menuRef.current)) {
			setMenuActive(false);
			setIconMenu(false);
		}
	}

	React.useEffect(() => {
		document.body.addEventListener('click', menuHidden)
	}, []);


	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__row">
					<Link to='/' className="header__logo">
						<svg className="header__logo-icon">
							<use xlinkHref={headerlogo + reactLogo}></use>
						</svg>
						<h1 className="header__title">React movies</h1>
					</Link>
					<nav ref={menuRef} className={menuActive === true ? 'header__menu menu-header active' : 'header__menu menu-header'}>
						<ul className="menu-header__list">
							<li className="menu-header__item"><Link to='/'>Home</Link></li>
							<li className="menu-header__item"><Link to="/coming-soon">Сoming soon</Link></li>
							<li className="menu-header__item"><Link to='/categories' >Categories</Link></li>
						</ul>
					</nav>
					<Search/>
					<button onClick={() => showMenu(iconMenu)} type="button" className={iconMenu === true ? 'icon-menu active' : 'icon-menu'}>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header;