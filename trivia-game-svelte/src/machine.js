import {assign, Machine} from 'xstate'
import {fetchAndNormalizeQuizData} from './utils'

const machine = Machine(
  {
    id: 'Machine',
    initial: 'welcome',
    context: {
      currentQuestion: 0,
      currentQuestionDisplay: 1,
      questions: [],
      totalCorrectAnswers: 0,
    },
    states: {
      welcome: {
        on: {
          START_QUIZ: 'loading',
        },
      },
      loading: {
        invoke: {
          id: 'getQuizData',
          src: 'fetchAndNormalizeQuizData',
          onDone: {
            target: 'quiz',
            actions: assign({
              questions: (_, event) => event.data,
            }),
          },
          onError: {
            target: 'failure',
          },
        },
      },
      failure: {
        on: {
          RETRY: 'loading',
          START_OVER: 'welcome',
        },
      },
      quiz: {
        on: {
          '': {
            target: 'results',
            actions: [],
            cond: 'allQuestionsAnswered',
          },
          ANSWER_FALSE: {
            actions: 'updateAnswer',
          },
          ANSWER_TRUE: {
            actions: 'updateAnswer',
          },
        },
      },
      results: {
        on: {
          PLAY_AGAIN: 'welcome',
        },
        exit: 'resetGame',
      },
    },
  },
  {
    actions: {
      resetGame: assign({
        currentQuestion: 0,
        currentQuestionDisplay: 1,
        questions: [],
        totalCorrectAnswers: 0,
      }),
      updateAnswer: assign((ctx, event) => ({
        questions: [
          ...ctx.questions.slice(0, ctx.currentQuestion),
          {
            ...ctx.questions[ctx.currentQuestion],
            userAnswer: event.answer,
            correct:
              ctx.questions[ctx.currentQuestion].correctAnswer === event.answer,
          },
          ...ctx.questions.slice(ctx.currentQuestion + 1),
        ],
        totalCorrectAnswers:
          ctx.questions[ctx.currentQuestion].correctAnswer === event.answer
            ? (ctx.totalCorrectAnswers += 1)
            : ctx.totalCorrectAnswers,
        currentQuestion: ctx.currentQuestion += 1,
        currentQuestionDisplay: ctx.currentQuestionDisplay += 1,
      })),
    },
    guards: {
      allQuestionsAnswered: ctx => {
        return (
          ctx.questions.filter(
            (question) => question.correct !== undefined,
          ).length === ctx.questions.length && true
        )
      },
    },
    services: {
      fetchAndNormalizeQuizData: () => fetchAndNormalizeQuizData(),
    },
  },
)

export default machine

