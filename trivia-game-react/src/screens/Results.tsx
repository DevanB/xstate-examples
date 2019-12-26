import React from 'react'
import tw from 'tailwind.macro'
import {State} from 'xstate'
import {Button, Container, CorrectIcon, H1, WrongIcon} from '../components'
import {AppMachineContext, AppMachineEvent, Question} from '../types'

const QuestionResults = tw.ul`w-3/4 my-4`
const Icon = tw.span`mr-4`
const Result = tw.li`flex mb-4 items-center`

interface ResultsProps {
  questions: Question[]
  playAgain: () => State<AppMachineContext, AppMachineEvent>
  totalCorrectAnswers: number
  totalQuestions: number
}

export const Results: React.FC<ResultsProps> = ({
  playAgain,
  questions,
  totalCorrectAnswers,
  totalQuestions,
}) => (
  <Container>
    <H1 data-testid='results-header'>
      You scored
      <br />
      {totalCorrectAnswers} / {totalQuestions}
    </H1>
    <QuestionResults>
      {questions.map(question => (
        <Result key={question.question}>
          <Icon>
            {question.correct === true ? <CorrectIcon /> : <WrongIcon />}
          </Icon>{' '}
          {question.question}
        </Result>
      ))}
    </QuestionResults>
    <Button onClick={playAgain} data-testid='play-again-button'>
      Play Again
    </Button>
  </Container>
)
