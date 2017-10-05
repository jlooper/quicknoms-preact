import { h, Component, render } from 'preact';
import { Router } from 'preact-router';
import "material-design-lite";
import "material-design-lite/dist/material.brown-deep_orange.min.css";

import { Layout } from "preact-mdl";

import Header from './header';
import Home from '../routes/home';
// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
        return (
            <div id="app">
                <Layout>
                    <Header/>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
					</Router>
                </Layout>
            </div>
        );
    }

}
