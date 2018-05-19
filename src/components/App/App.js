import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ProgressBar from '../ProgressBar/ProgressBar'
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import TextField from '../TextField/TextField';
import { textAnswerChange, switchQuestion } from '../../reducers/form';
import { TEXT_QUESTION } from '../../constants/questionTypes';
import './App.css'; 

class App extends PureComponent {

	handleChange = event => {
		const { value } = event.target
		this.props.dispatch(textAnswerChange({ index: this.props.currentQuestionIndex, value }));
	}

	handleSwitchQuestion = index => () => {
		this.props.dispatch(switchQuestion(index));
	}

	isAnswerValid = question => {
		const { question_type, value, min_char_length } = question;
		// Question validation by `question_type` property.
		switch (question_type) {
			case TEXT_QUESTION:
				return value.length < min_char_length;
			default:
				return true;
		}
	}

	renderQuestionComponent = question => {
		const { question_type, is_required, min_char_length, value } = question;
		// You can check `question_type` property and return component you need.
		switch (question_type) {
			case TEXT_QUESTION:
				return (
					<TextField
						is_required={is_required}
						min_char_length={min_char_length}
						value={value}
						onChange={this.handleChange}
					/>
				)
			default:
				return null;
		}
	}

	render() {
		const { title, questions, currentQuestionIndex } = this.props;
		const currentQuestion = questions[currentQuestionIndex]
		const { prompt, is_required } = currentQuestion;
		const isPrevDisabled = currentQuestionIndex === 0
		const isNextDisabled = currentQuestionIndex === questions.length - 1 || (is_required && this.isAnswerValid(currentQuestion))

		return (
		<div className="App">
			<Header
				title={title}
			/>
			<ProgressBar
				width={`${currentQuestionIndex / questions.length * 100}%`}
			/>
			<Body
				prompt={prompt}
				is_required={is_required}
				component={this.renderQuestionComponent(currentQuestion)}
			/>
			<Footer 
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
				onPrevClick={this.handleSwitchQuestion(-1)}
				onNextClick={this.handleSwitchQuestion(1)}
			/>
		</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		title: state.form.title,
		questions: state.form.questions,
		currentQuestionIndex: state.form.currentQuestionIndex
	};
};

export default connect(mapStateToProps)(App);
