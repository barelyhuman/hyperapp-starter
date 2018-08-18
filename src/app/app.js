import { h, app } from "hyperapp";

const state = {
    message: 'Hello',
    buttonText: 'World'
}

const actions = {
    update: () => state => ({ message: 'Jarvis: ', buttonText: "I'm In Sir!" })
}

const view = (state, actions) => <div>
    <div>{state.message}</div>
    <button onclick={actions.update}>{state.buttonText}</button>
</div>

app(state, actions, view, document.querySelector('#root'));