import { h, Component } from 'preact';
import Recipes from '../../components/Recipes';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<Recipes />
			</div>
		);
	}
}