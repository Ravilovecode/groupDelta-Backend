// routes/recipeRoutes.js

const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Routes
router.get('/getallrecipes', recipeController.getAllRecipes);
router.get('/getrecipebyid/:id', recipeController.getRecipeById);
router.post('/addrecipe', recipeController.addRecipe);
router.put('/updaterecipe/:id', recipeController.updateRecipe);
router.delete('/deleterecipe/:id', recipeController.deleteRecipe);

module.exports = router;
