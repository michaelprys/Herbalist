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

export interface User {
    user_id: number;
    firstname?: string;
    lastname?: string;
    username: string;
    password: string;
    email?: string;
    created_at?: Date;
}
