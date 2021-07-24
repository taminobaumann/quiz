import _ from 'lodash';

export type Question = {
    category: string,
    correct_answer: string,
    difficulty: 'easy' | 'medium' | 'hard',
    incorrect_answers: string[],
    question: string,
    type: string
}

export type Category = {
    id: number;
    name: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const getQuizQuestions = async (amount: number, difficulty: Difficulty, categoryId: number): Promise<QuestionState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}&category=${categoryId}`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: _.shuffle([...question.incorrect_answers, question.correct_answer])
        }
    ));
};


export const getQuizCategories = async () => {
  const endpoint = 'https://opentdb.com/api_category.php';
  const data = await (await fetch(endpoint)).json() as {trivia_categories: Category[]};
  return data.trivia_categories;
};