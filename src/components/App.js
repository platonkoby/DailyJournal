import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';

function App() {
	return (
		<div className="skeleton">
			<Nav />
			<Switch>
				<Route path="/">
					<Main />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
