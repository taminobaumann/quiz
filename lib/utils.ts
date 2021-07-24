import {Category} from "./api";

export type CategoryForSelect = {
    value: number;
    label: string;
};

export const transformQuizCategoriesForSelect = (quizCategories: Category[]): CategoryForSelect[] => {
    return quizCategories.map(category => ({value: category.id , label: category.name }));
};

export const getRandomInt = (min:number, max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
};