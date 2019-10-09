# xstate-examples

## Explanation
This repo serves as a resource for any developers curious about [state machines](https://statecharts.github.io/what-is-a-state-machine.html) and [statecharts](https://statecharts.github.io). I have heard many developers that _want_ to use state machines, but have not found the "perfect reason". Now the "perfect reason" is easier to find.

## Repository Structure
- Each example is in it's own directory in this repository.
- Each example is a small application created with [Create React App](https://create-react-app.dev), [Xstate](https://xstate.js.org), [tailwind](https://tailwindcss.com), [React Testing Library](https://testing-library.com/react), and [cypress](https://www.cypress.io).
- Each example has a README with link to the [xstate visualization tool](https://xstate.js.org/viz/) for that example's state machine/statechart.
- Each example uses [model-based testing](https://css-tricks.com/model-based-testing-in-react-with-state-machines/) and state machine/statechart best practices.

## Current Examples
- [Trivia Game](/trivia-game)

## Future Examples
- Authentication/authorization flow
- Welcome/intro flow
- Todos
- Ticket selection and payment flow
- Stepped form/wizard
- Medium-like article creation/updating 

## Examples Showing Specific State Machine Concepts
- [Guards](https://xstate.js.org/docs/guides/guards.html): [Trivia Game](/trivia-game/src/machine.ts#L50)
- [Transient Transitions](https://xstate.js.org/docs/guides/transitions.html#transient-transitions): [Trivia Game](/trivia-game/src/machine.ts#L47-L51)
- [Invoking Services (Promises)](https://xstate.js.org/docs/guides/communication.html#the-invoke-property): [Trivia Game](/trivia-game/src/machine.ts#L22-L37)
