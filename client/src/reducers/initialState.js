export default {
  recipes: {
    userRecipes: {
      newRecipes: [],
      cookedRecipes: [],
      totalRecipes: []
    },
    allRecipes: []
  },
  friends: [],
  potlucks: [],
  user: {},
  session: !!sessionStorage.jwt
}
