import { h, Component } from 'preact';
import { auth, database } from '../../firebase';
import { filter, map } from 'lodash';
import Recipes from '../../Recipes';
import "material-design-lite";
import "material-design-lite/dist/material.brown-deep_orange.min.css";
import { Card, Grid } from "preact-mdl";


export default class RecipeList extends Component {
	constructor(props) {
		super(props);
	}

	handleCompleted(key) {
		
			database
				.ref('/')
				.child('Recipes')
				.child(key)
	}
	

	render() {
		const { recipes } = this.props;
		return (
			<Grid>
				{map(recipes, (recipe, key) => 
				<Card shadow={4}>
					<Card.Title>
						<Card.TitleText>{recipe.Name}</Card.TitleText>						
					</Card.Title>
					<img src={recipe.Image}/>
					<Card.Text>
						<p>{recipe.Notes}</p>
					</Card.Text>					
				</Card>	
				
				)}
		  	</Grid>
		);
	}
}