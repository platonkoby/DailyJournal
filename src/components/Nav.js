import React from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

const navbar = [
	{
		title: 'Daily CheckUp',
		url: 'daily-checkup'
	},
	{
		title: 'Tough Love',
		url: 'tough-love'
	}
];

function Nav() {
	return (
		<nav>
			{navbar.map(({ title, url }) => (
				<li key={url}>
					<Link to={`/${url}`}>{title}</Link>
				</li>
			))}
		</nav>
	);
}

export default Nav;
