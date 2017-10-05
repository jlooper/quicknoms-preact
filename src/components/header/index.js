import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import "material-design-lite";
import "material-design-lite/dist/material.brown-deep_orange.min.css";
import { Layout } from "preact-mdl";

export default class Header extends Component {
	render() {
		return (
			<Layout.Header>
                <Layout.HeaderRow>
                    <Layout.Title>
                        QuickNoms
                    </Layout.Title>
                    <Layout.Spacer />          
                </Layout.HeaderRow>
            </Layout.Header>
		);
	}
}
