export const GET_RECIPE = "GET_RECIPE"
export const RECEIVE_RECIPE = "RECEIVE_RECIPE"
export const FAIL_RECIPE = "FAIL_RECIPE"

const recipeFetching = () => ({
  type: GET_RECIPE,
})

const recipeFetched = (payload) => ({
  type: RECEIVE_RECIPE,
  payload,
})

const recipeFailed = (payload) => ({
  type: FAIL_RECIPE,
  payload,
})


const executeFetch = async (id) => {
  const response = await fetch(`/api/recipe/${id}`)
  const recipe = await response.json()
  return recipe
}

export const fetchRecipe = (id) => {
  return (dispatch) => {
    dispatch(recipeFetching())
    return executeFetch(id)
      .then((res) => dispatch(recipeFetched(res)))
      .catch((err) => dispatch(recipeFailed(err)))
  }
}
