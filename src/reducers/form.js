import { createAction, createReducer } from 'redux-act';
import data from '../data';

const addValueProp = value => question => ({
    ...question,
    value
})

const initialState = {
    ...data,
    questions: data.questions.map(addValueProp('')),
    currentQuestionIndex: 0
}

export const textAnswerChange = createAction('FORM/TEXT_ANSWER_CHANGE');

const handleTextAnswerChange = (state, data) => {
    const { index, value } = data;
    return {
        ...state,
        questions: state.questions.map((question, mapIndex) => {
            if(index === mapIndex) {
                return addValueProp(value)(question)
            }
            return question
        })
    }
}

export const switchQuestion = createAction('FORM/SWITCH_QUESTION');

const handleSwitchQuestion = (state, data) => {
    return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + data
    }
}

const reducer = createReducer(on => {
    on(textAnswerChange, handleTextAnswerChange);
    on(switchQuestion, handleSwitchQuestion);
}, initialState);

reducer.key = 'form';

export default reducer;
