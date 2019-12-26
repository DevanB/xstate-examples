import decode from 'lean-he/decode'
import {Question, QuizDataQuestion} from '../types'

export const normalizeQuizData = (data: QuizDataQuestion[]): Question[] =>
  data.reduce(
    (acc: Question[], obj: QuizDataQuestion) => [
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
