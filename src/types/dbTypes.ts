export interface Recipe {
    recipe_id: number;
    slug: string;
    image: string;
    alt: string;
    title: string;
    full_description: string;
    short_description: string;
    method: string;
    prep_time: number;
}

export interface Ingredient {
    ingredient_id: number;
    name: string;
    slug: string;
}
