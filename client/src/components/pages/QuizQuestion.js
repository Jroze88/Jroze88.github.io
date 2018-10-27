import React, { Component}  from 'react';
import './quizcomponents/QuizQuestion.css'
import $ from 'jquery';


class QuizQuestion extends Component {

    state = {
        question : " "
    }

    componentDidMount() {

        $('label').



    }



    render() {
        return(
 
<div id="test-form">
    <div class="row textdiv">
        <div id="question">
            {this.state.question}
        </div>
    </div>
    <div class="row contactdiv">
        <div id="options">
            <div id="agree">
                Agree
            </div>
            <div id="answer_bubbles">
                 
                <label id="a1">
                    <input type="radio" name="options" id="INPUT_7" />
                </label> 
                <label id="a2">
                    <input type="radio" name="options" id="INPUT_9" />
                </label> 
                <label id="a3">
                    <input type="radio" name="options" id="INPUT_11" />
                </label> 
                <label id="a4">
                    <input type="radio" name="options" id="INPUT_13" />
                </label> 
                <label id="a5">
                    <input type="radio" name="options" id="INPUT_15" />
                </label> 
                <label id="a6">
                    <input type="radio" name="options" id="INPUT_17" />
                </label> 
                <label id="a7">
                    <input type="radio" name="options" id="INPUT_19" />
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