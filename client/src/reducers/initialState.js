export default {
  recipes: {
    userRecipes: {
      newRecipes: [],
      cookedRecipes: [],
      totalUserRecipes: []
    },
    allRecipes: []
  },
  friends: [],
  potlucks: [],
  user: {},
  session: !!sessionStorage.jwt
}
