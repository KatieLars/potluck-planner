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
  potlucks: {
    potlucks: [],
    allPotluckRecipes: []
  },
  user: {},
  session: !!sessionStorage.jwt
}
