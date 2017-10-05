import { h, Component } from 'preact';
import { database } from '../firebase';
import RecipeList from './RecipeList';

export default class Recipes extends Component {
	constructor() {
		super();

		this.state = {
			recipes: null
		};
	}

	componentDidMount() {
		

			const recipesRef = database.ref(
				'/Recipes'
			);

			recipesRef.on('value', snapshot => {
				this.setState({ recipes: snapshot.val() });
			});
		
	}

	render() {
		const { recipes } = this.state;
	  
		return (		
			  <div>
				  <RecipeList recipes={recipes} />				  
			  </div>		
		);
	  }
}