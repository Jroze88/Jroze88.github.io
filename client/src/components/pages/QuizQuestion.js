import React, { Component}  from 'react';
import './quizcomponents/QuizQuestion.css'
import API from "../../utils/API";
import $ from 'jquery';
import Questions from './quizcomponents/Questions';
import QuestionValues from './quizcomponents/QuestionsValues';
// import NamePrompt from './quizcomponents/nameprompt'


class QuizQuestion extends Component {

    state = {
        question : 0,
        answer : 0,
        userStats : {}

    }

    componentDidMount = () => { 

        
        let personName = window.localStorage.getItem('friendfinderuser')

        class friendfinderuser {
            constructor(Name, E = 0, I  = 0, N  = 0, S  = 0, T  = 0, F  = 0, J  = 0, P  = 0) {
                this.name = Name;                
                this.E = E;
                this.I = I;
                this.N = N;
                this.S = S;
                this.T = T;
                this.F = F;
                this.J = J;
                this.P = P;                
            }
            IncrE(x) {this.E+=x}
            IncrI(x) {this.I+=x}  
            IncrN(x) {this.N+=x}  
            IncrS(x) {this.S+=x}  
            IncrT(x) {this.T+=x}  
            IncrF(x) {this.F+=x}  
            IncrJ(x) {this.J+=x}  
            IncrP(x) {this.P+=x}  
        }

        console.log(personName)

        window.user = new friendfinderuser(personName, 0, 0, 0, 0, 0, 0, 0, 0);

        this.setState({
            userStats : window.user
        })




    }

    handleFormSubmit = event => {

        event.preventDefault();

        console.log(this.state.answer);

        if (this.state.answer === 0) {
            alert('Please choose a value!')
            return
        }



        if (QuestionValues[this.state.question] === 'F') {
            window.user.IncrF(this.state.answer)
            this.setState({
                userStats : window.user
            })
        } else if (QuestionValues[this.state.question] === 'E') {
            window.user.IncrE(this.state.answer)
            this.setState({
                userStats : window.user
            })

        } else if (QuestionValues[this.state.question] === 'J') {
            window.user.IncrJ(this.state.answer)
            this.setState({
                userStats : window.user
            })
        }
        else if (QuestionValues[this.state.question] === 'N') {

            window.user.IncrN(this.state.answer)
            this.setState({
                userStats : window.user
            })

        } else if (QuestionValues[this.state.question] === 'P') {

            window.user.IncrP(this.state.answer)
            this.setState({
                userStats : window.user
            })

        } else if (QuestionValues[this.state.question] === 'I') {

            window.user.IncrI(this.state.answer)
            this.setState({
                userStats : window.user
            })
        } else if (QuestionValues[this.state.question] === 'S') {

            window.user.IncrS(this.state.answer)
            this.setState({
                userStats : window.user
            })
        } else if (QuestionValues[this.state.question] === 'T') {

            window.user.IncrT(this.state.answer)
            this.setState({
                userStats : window.user
            })

        }

        
        if (this.state.question === 60) {
            API.postUser(window.user)
        }

        this.setState({ answer: 0 })
        this.setState({ question: this.state.question + 1 })

       this.clearInput();


    }

    handleChange = event => {

        let swap = event.target.parentElement      

        let answerNum = 0;
   
        answerNum = parseInt(event.target.value);

        this.setState({answer : answerNum})

        $('label').attr('class', 'unchecked');
        $(swap).removeClass('unchecked')


 
    }

    clearInput = () => {  $('label').attr('class', 'unchecked'); }



    render() {
        return(
 
<div>


    



    <div id = "test-form" className="row quizdiv textdiv">
        <div id="question">
            {Questions[this.state.question]}
        </div>
   

        <div id="options">
            <div id="agree">
                Agree
            </div>
            <div id="answer_bubbles">
                 
                <label id="a1" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" value = "3" id="INPUT_7" />
                </label> 
                <label id="a2" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" value = "2" id="INPUT_9" />
                </label> 
                <label id="a3" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" value = "1" id="INPUT_11" />
                </label> 
                <label id="a4" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_13" value = "0" />
                </label> 
                <label id="a5" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_15" value = "-1"/>
                </label> 
                <label id="a6" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_17" value = "-2"/>
                </label> 
                <label id="a7" className='unchecked'>
                    <input type="radio" onClick={this.handleChange} name="options" id="INPUT_19" value = "-3"/>
                </label>
            </div>
            <div id="disagree">
                Disagree
            </div>
            <button className="btn confirm btn-danger align-center"
            onClick={this.handleFormSubmit}
            >Submit</button>

            </div>

       </div> 
       </div>         

        )
    }


}

export default QuizQuestion