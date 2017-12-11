import React from 'react';
import {Router, browserHistory} from 'react-router';
import {hydrate} from 'react-dom';
import routes from './routes';


hydrate(
	<Router history={browserHistory} routes={routes} />,
	document.getElementById('app')
);