import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { configureStore } from 'redux/store';

const MainApp = () => (
    <Provider store={configureStore()}>
			<Router>
				abcd
			</Router>
	</Provider>
);

export default MainApp;