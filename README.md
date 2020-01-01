# xstate-examples

## Explanation
This repo serves as a resource for any developer curious about [state machines](https://statecharts.github.io/what-is-a-state-machine.html) and [statecharts](https://statecharts.github.io). I've heard developers that _want_ to use state machines, but have not found the "perfect reason" to utilize them. Now the "perfect reason" is easier to find. 😉

## Repository Structure
- Each example is in it's own directory.
- Each example is a small application created with [Create React App](https://create-react-app.dev)/[vue-cli](https://cli.vuejs.org/ ), [Xstate](https://xstate.js.org), [tailwind](https://tailwindcss.com), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)/[Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro), and [cypress](https://www.cypress.io).
- Each example has a README with link to the [xstate visualization tool](https://xstate.js.org/viz/) for that example's state machine/statechart.
- Each example uses [model-based testing](https://css-tricks.com/model-based-testing-in-react-with-state-machines/) and state machine/statechart best practices.

## Current Examples
- Trivia Game [React](/trivia-game-react) | [Vue](/trivia-game-vue)

## Future Examples
- Authentication flow
- Welcome/walkthrough flow
- Todos
- Ticket selection and payment flow
- Stepped form/wizard
- Medium-like article creation/updating 

## Examples Showing Specific State Machine Concepts
- [Guards](https://xstate.js.org/docs/guides/guards.html): Trivia Game [React](/trivia-game-react/src/machine.ts#L47) | [Vue](/trivia-game-vue/src/machine.js#L46)
- [Transient Transitions](https://xstate.js.org/docs/guides/transitions.html#transient-transitions): Trivia Game [React](/trivia-game-react/src/machine.ts#L44-L48) | [Vue](/trivia-game-vue/src/machine.js#L43-L47)
- [Invoking Services (Promises)](https://xstate.js.org/docs/guides/communication.html#the-invoke-property): Trivia Game [React](/trivia-game-react/src/machine.ts#L22-L34) | [Vue](/trivia-game-vue/src/machine.js#L21-L33)

## Handy Resources
- [Xstate documentation](https://xstate.js.org)
- [Statecharts community](https://spectrum.chat/statecharts)
- [World of Statecharts](https://statecharts.github.io)
