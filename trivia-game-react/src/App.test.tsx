import React from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import App from './App'
import {createModel} from '@xstate/test'
import {assign, Machine} from 'xstate'

const testMachine = Machine(
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
        meta: {
          test: ({getByTestId}: {getByTestId: any}) => {
            expect(getByTestId('welcome-header'))
          },
        },
      },
      loading: {
        on: {
          SUCCESS: {
            target: 'quiz',
            actions: 'resolveData',
          },
          FAILURE: 'failure',
        },
        meta: {
          test: ({getByTestId}: {getByTestId: any}) => {
            expect(getByTestId('loading-header'))
          },
        },
      },
      failure: {
        on: {
          RETRY: 'loading',
          START_OVER: 'welcome',
        },
        meta: {
          test: ({getByTestId}: {getByTestId: any}) => {
            expect(getByTestId('failure-header'))
          },
        },
      },
      quiz: {
        on: {
          '': {
            target: 'results',
            cond: 'allQuestionsAnswered',
          },
          ANSWER_FALSE: {
            actions: 'updateAnswer',
          },
          ANSWER_TRUE: {
            actions: 'updateAnswer',
          },
        },
        meta: {
          test: ({getByTestId}: {getByTestId: any}) => {
            expect(getByTestId('quiz-header'))
          },
        },
      },
      results: {
        on: {
          PLAY_AGAIN: 'welcome',
        },
        meta: {
          test: ({getByTestId}: {getByTestId: any}) => {
            expect(getByTestId('results-header'))
          },
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
      resolveData: assign({
        questions: [
          {
            category: 'Entertainment: Video Games',
            question: 'Unturned originally started as a Roblox game.',
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Entertainment: Comics',
            question:
              'In the comic book "Archie", Betty is friends with Veronica because she is rich.',
            correctAnswer: false,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Entertainment: Video Games',
            question:
              'In Undertale, having a "Fun Value" set to 56-57 will play the "Wrong Number Song Call".',
            correctAnswer: false,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Entertainment: Video Games',
            question:
              'TF2: Sentry rocket damage falloff is calculated ba…try and the enemy, not the engineer and the enemy',
            correctAnswer: false,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Mythology',
            question:
              'Rannamaari was a sea demon that haunted the people…ased monthly with the sacrifice of a virgin girl.',
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'General Knowledge',
            question: 'In Scandinavian languages, the letter Å means river.',
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Entertainment: Music',
            question: 'The band STRFKR was also briefly known as Pyramiddd.',
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Politics',
            question:
              "Nazi Germany surrendered on Harry Truman's birthday while he was president.",
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'Celebrities',
            question:
              "Lady Gaga's real name is Stefani Joanne Angelina Germanotta.",
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
          {
            category: 'History',
            question:
              "During the Winter War, the amount of Soviet Union … went missing was five times more than Finland's.",
            correctAnswer: true,
            userAnswer: undefined,
            correct: undefined,
          },
        ],
      }),
      updateAnswer: assign((ctx: any, event: any) => ({
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
            (question: any) => question.correct !== undefined,
          ).length === ctx.questions.length && true
        )
      },
    },
  },
)

describe('trivia app', () => {
  const testModel = createModel(testMachine).withEvents({
    START_QUIZ: ({getByTestId}: {getByTestId: any}) => {
      fireEvent.click(getByTestId('begin-button'))
    },
    FAILURE: () => {},
    SUCCESS: () => {},
    RETRY: ({getByTestId}: {getByTestId: any}) => {
      fireEvent.click(getByTestId('retry-button'))
    },
    START_OVER: ({getByTestId}: {getByTestId: any}) => {
      fireEvent.click(getByTestId('start-over-button'))
    },
    ANSWER_TRUE: ({getByTestId}: {getByTestId: any}) => {
      fireEvent.click(getByTestId('answer-true-button'))
    },
    ANSWER_FALSE: ({getByTestId}: {getByTestId: any}) => {
      fireEvent.click(getByTestId('answer-false-button'))
    },
    PLAY_AGAIN: ({getByTestId}: {getByTestId: any}) => {
      fireEvent.click(getByTestId('play-again-button'))
    },
  })

  const testPlans = testModel.getSimplePathPlans()
  testPlans.forEach((plan: any) => {
    describe(plan.description, () => {
      afterEach(cleanup)
      plan.paths.forEach((path: any) => {
        it(path.description, () => {
          const rendered = render(<App />)
          return path.test(rendered)
        })
      })
    })
  })

  it('coverage', () => {
    testModel.testCoverage()
  })
})
