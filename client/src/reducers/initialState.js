export default {
  recipes: {
    userRecipes: {
      newRecipes: [],
      cookedRecipes: []
    },
    allRecipes: []
  },
  friends: [],
  potlucks: [],
  user: {},
  session: !!sessionStorage.jwt
}
