export interface QuizDataQuestion {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface FetchQuizDataResponse {
  response_code: number
  results: Question[]
}

export interface Question {
  category: string
  question: string
  correctAnswer: boolean
  userAnswer?: boolean
  correct?: boolean
}

export interface AppMachineSchema {
  states: {
    welcome: {}
    loading: {}
    failure: {}
    quiz: {}
    results: {}
  }
}

export type AppMachineEvent =
  | {type: 'START_QUIZ'}
  | {type: 'RETRY'}
  | {type: 'START_OVER'}
  | {type: 'ANSWER_FALSE'; answer: boolean}
  | {type: 'ANSWER_TRUE'; answer: boolean}
  | {type: 'PLAY_AGAIN'}

export interface AppMachineContext {
  currentQuestion: number
  currentQuestionDisplay: number
  questions: Question[]
  totalCorrectAnswers: number
}
