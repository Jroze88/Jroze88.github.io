import React, { Component}  from 'react';
import './quizcomponents/QuizQuestion.css'
import $ from 'jquery';
import Questions from './quizcomponents/Questions';
import QuestionValues from './quizcomponents/QuestionsValues';


class QuizQuestion extends Component {

    state = {
        question : 0,
        answer : 0,
    }

    componentDidMount = () => { 
    



    }

    handleChange = event => {

        let swap = event.target.parentElement

        

        let answerNum = 0;
   
        answerNum = event.target.value;

        this.setState({answer : answerNum})

        $('label').attr('class', 'unchecked');
        $(swap).removeClass('unchecked')



 
    }



    render() {
        return(
 
<div>
    <div id = "test-form" className="row textdiv">
        <div id="question">
            {Questions[this.state.question]}
        </div>
   

        <div id="options">
            <div id="agree">
                Agree
            </div>
            <div id="answer_bubbles">
                 
                <label id="a1" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" value = "1" id="INPUT_7" />
                </label> 
                <label id="a2" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" value = "2" id="INPUT_9" />
                </label> 
                <label id="a3" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" value = "3" id="INPUT_11" />
                </label> 
                <label id="a4" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_13" value = "4" />
                </label> 
                <label id="a5" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_15" value = "5"/>
                </label> 
                <label id="a6" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_17" value = "6"/>
                </label> 
                <label id="a7" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_19" value = "7"/>
                </label>
            </div>
            <div id="disagree">
                Disagree
            </div>

            </div>

       </div> 
       </div>         

        )
    }


}

export default QuizQuestion