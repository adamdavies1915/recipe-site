import styled from "styled-components"

export const RecipeContainer = styled.div`
  padding: 16px;
  margin-bottom: 16px;
`;

export const RecipeName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const RecipeInstructions = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

export const RecipeIngredients = styled.ul`
  list-style: none; // remove the bullet points
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const RecipeIngredient = styled.li`
  margin-bottom: 8px;
  align-items: center;
`;

export const RecipeIngredientName = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;

export const RecipeIngredientAmount = styled.span`
  margin-right: 10px;
  margin-left: 8px;
`;
