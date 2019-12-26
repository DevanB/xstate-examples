import decode from 'lean-he/decode'

export const normalizeQuizData = data =>
  data.reduce(
    (acc, obj) => [
      ...acc,
      {
        category: decode(obj.category),
        question: decode(obj.question),
        correctAnswer: obj.correct_answer === 'True' ? true : false,
        userAnswer: undefined,
        correct: undefined,
      },
    ],
    [],
  )
