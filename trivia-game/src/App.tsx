import React from 'react'
import {useMachine} from '@xstate/react'
import tw from 'tailwind.macro'
import {GlobalStyle} from './components'
import machine from './machine'
import {
  Failure as FailureScreen,
  Loading as LoadingScreen,
  Quiz as QuizScreen,
  Results as ResultsScreen,
  Welcome as WelcomeScreen,
} from './screens'

const AppWrapper = tw.div`min-h-screen min-w-screen h-screen w-screen flex justify-center items-center bg-gray-200`
const Main = tw.main`z-20 w-11/12 h-auto max-h-screen overflow-y-scroll m-4 flex flex-col items-center bg-white rounded shadow md:w-3/4 lg:w-1/2 md:m-0`

function App() {
  const [current, send] = useMachine(machine)
  return (
    <AppWrapper>
      <GlobalStyle />
      <Main>
        {current.matches('welcome') ? (
          <WelcomeScreen startQuiz={() => send('START_QUIZ')} />
        ) : current.matches('loading') ? (
          <LoadingScreen />
        ) : current.matches('failure') ? (
          <FailureScreen
            retry={() => send('RETRY')}
            startOver={() => send('START_OVER')}
          />
        ) : current.matches('quiz') ? (
          <QuizScreen
            answerFalse={() => send({type: 'ANSWER_FALSE', answer: false})}
            answerTrue={() => send({type: 'ANSWER_TRUE', answer: true})}
            currentQuestionNumber={current.context.currentQuestionDisplay}
            question={
              current.context.questions[current.context.currentQuestion]
            }
            totalQuestions={current.context.questions.length}
          />
        ) : current.matches('results') ? (
          <ResultsScreen
            playAgain={() => send('PLAY_AGAIN')}
            questions={current.context.questions}
            totalCorrectAnswers={current.context.totalCorrectAnswers}
            totalQuestions={current.context.questions.length}
          />
        ) : null}
      </Main>
    </AppWrapper>
  )
}

export default App
