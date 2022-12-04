import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "../../actions"
import {
    RecipeContainer,
    RecipeName,
    RecipeInstructions,
    RecipeIngredients,
    RecipeIngredient,
    RecipeIngredientName,
    RecipeIngredientAmount
} from "./styles"


class Recipe extends Component {

    render() {

        const recipe = this.props.recipe

        // render the recipe if it has been fetched
        if (recipe) {
            return (
                <RecipeContainer>
                    <RecipeName>{recipe.name}</RecipeName>
                    <RecipeInstructions>{recipe.instructions}</RecipeInstructions>
                    <h2>Ingredients:</h2>
                    <RecipeIngredients>
                        {recipe.ingredients.map(ingredient => (
                            <RecipeIngredient key={ingredient._id}>
                                <RecipeIngredientName>{ingredient.name}</RecipeIngredientName>
                                <RecipeIngredientAmount>
                                    {ingredient.amount} {ingredient.unit}
                                </RecipeIngredientAmount>
                            </RecipeIngredient>
                        ))}
                    </RecipeIngredients>
                </RecipeContainer>
            );
        }

        return null;;
    }
}

const mapStateToProps = (state) => {
    const { recipe } = state
    return { ...recipe }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchRecipe: actions.fetchRecipe,
        },
        dispatch
    )


// connect the component to the store
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe);
