import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeClick = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe',
            'Test description',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
            [
                new Ingredient('Thing', 1),
                new Ingredient('Thingis', 10)
            ]),
        new Recipe(
            'Test Recipe 2',
            'Test description 2',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F03%2F01%2Fcucumber-sandwich.jpg',
            [
                new Ingredient('Cos', 2),
                new Ingredient('Cosik', 5)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}