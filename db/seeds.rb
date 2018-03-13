User.create(username: "admin", password: "admin", email: "admin@admin.com")
User.create(username: "Pip", password: "pippity", email: "pip@pip.com")
User.create(username: "Peep", password: "bigpeep", email: "peep@peep.com")
User.create(username: "Stubbs", password: "stubbs", email: "stubbs@stubss.com")

Potluck.create(user_id: 1, name: "picnic", description: "funtimes", date: "07/08/2019", time: "5 pm" location: "field")
Potluck.create(user_id: 1, name: "birthday", description: "celebrate", date: "06/12/2018", time: "12 pm" location: "resto")
Potluck.create(user_id: 1, name: "dinner", description: "noms", date: "03/04/2018", time: "4 pm", location: "Sam's")
Potluck.create(user_id: 1, name: "wine tasting", description: "absorb", date: "05/31/2019", time: "2 pm" location: "union hall")
Potluck.create(user_id: 2, name: "potlucky", description: "epitome", date: "01/02/2018", time: "7 pm", location: "home")

Recipe.create(user_id: 1, difficulty: "easy", url: "www.recipe.com", name: "Recipe")
Recipe.create(user_id: 1, difficulty: "hard", url: "www.hardrecipe.com", name: "Hard Recipe")
Recipe.create(user_id: 2, difficulty: "normal", url: "www.normalrecipe.com", name: "Normal Recipe")
Recipe.create(user_id: 2, difficulty: "easy", url: "www.easyrecipe.com", name: "Easy Recipe")

User.first.friendships.create(friend_id: 2)
User.first.friendships.create(friend_id: 3)

User.first.guestships.create(potluck_id: 5)
User.second.guestships.create(potluck_id: 2)
User.second.guestships.create(potluck_id: 3)

User.first.potluck_attendees.create(potluck_id: 4)
User.second.potluck_attendees.create(potluck_id: 2)

User.first.potluck_recipes.create(recipe_id: 4, potluck_id: 1)
User.first.potluck_recipes.create(recipe_id: 2, potluck_id: 5)
User.second.potluck_recipes.create(recipe_id: 3, potluck_id: 2)
