export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  // NOTE: the category is currently hard coded to be about animals.
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=27&type=multiple`;

  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
