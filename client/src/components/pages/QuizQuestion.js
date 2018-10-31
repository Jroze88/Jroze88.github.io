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
        userStats : {},
        userType : {
            Decision : "",
                    DecisionValue : 0,
                    Information : "",
                    InformationValue : 0,
                    Energy : "",
                    EnergyValue : 0,
                    Organization : "",
                    OrganizationValue : 0
        },
        chosen : false

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

        let { relp0, relp1, relp2, relp3, relp4, relp5, relp6, relp7} = 0;



        event.preventDefault();

        console.log(this.state.answer);

        if (this.state.chosen === false) {
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
            this.setState({ question: this.state.question + 1 })
            $('#answer_bubbles').css('display', 'none')
            $('#agree').css('display', 'none')
            $('#disagree').css('display', 'none')
            $('.confirm').css('display', 'none')


            if (window.user.E > window.user.I) {
                window.user.res.En = "E"
                window.user.Energy = 'Extrovert'
                window.user.EnergyValue = (window.user.E - window.user.I)
            } 
            if (window.user.I > window.user.E) {
                window.user.res.En = "I"
                window.user.Energy = 'Introvert'
                window.user.Energyvalue = (window.user.I - window.user.E)
            }
            if (window.user.N > window.user.S) {
                window.user.res.In = "N"
                window.user.Information = 'Intuition'
                window.user.InformationValue = (window.user.N - window.user.S)
            }
            if (window.user.S > window.user.N) {
                    window.user.res.In = "S"
                window.user.Information = 'Sensory'
                window.user.InformationValue = (window.user.S - window.user.N)
            }
            if (window.user.J > window.user.P) {
                window.user.res.Org = "J"
                window.user.Organization = 'Judging'
                window.user.OrganizationValue = (window.user.J - window.user.P)
            }
            if (window.user.P > window.user.J) {
                window.user.res.Org = "P"
                window.user.Organization = 'Perceiving'
                window.user.OrganizationValue = (window.user.P - window.user.J)
            }
            if (window.user.T > window.user.F) {
                window.user.res.Dec = "T"
                window.user.Decision = 'Thinking'
                window.user.DecisionValue = (window.user.T - window.user.F)
            } 
            if (window.user.F > window.user.T) {
                window.user.res.Dec = "F"
                window.user.Decision = 'Feeling'
                window.user.DecisionValue = (window.user.F - window.user.T)
            }

            API.postUser(window.user)

            this.setState({
                userType : 
                    {Decision : this.state.userType.Decision,
                    DecisionValue : this.state.userType.DecisionValue,
                    Information : this.state.userType.Information,
                    InformationValue : this.state.userType.InformationValue,
                    Energy : this.state.userType.Energy,
                    EnergyValue : this.state.userType.EnergyValue,
                    Organization : this.state.userType.Organization,
                    OrganizationValue : this.state.userType.OrganizationValue}

            })



            if (this.state.userType.Decision === 'Thinking') {
                relp7 = (window.user.DecisionValue/24 * 100)
                
                
            } else if (this.state.userType.Decision === 'Feeling') {
                relp6 = (window.user.DecisionValue/36 * 100)
                
               
            }

            if (this.state.userType.Information === 'Intuition') {
                relp5 = (window.user.InformationValue/30 * 100)
                
               
            } else if (this.state.userType.Information === 'Sensory') {
                relp3 = (window.user.InformationValue/9 * 100)
                
               
            }
                if (this.state.userType.Energy === 'Extrovert') {
                    relp4 = (window.user.Energyvalue/21 * 100)
                    
                
                } else if (this.state.userType.Energy === 'Introvert') {
                    relp2 = (window.user.Energyvalue/14 * 100)
                    
                    
                }
                
            if (this.state.userType.Organization === 'Judging') {
                relp1 = (window.user.OrganizationValue/24 * 100)
                
              
            } else if (this.state.userType.Organization === 'Perceiving') {
                relp0 = (window.user.OrganizationValue/21 * 100)
             
                
            }


            API.getFriends(window.user.res).then(function(res) {


            let resultdiv = document.createElement('div')
            resultdiv.textContent(`Your matches are: ${res.body}`)
            $('#question').append(resultdiv)



            }).catch(err => console.log(err));


            $('.resultmeter').css('display', 'block')
            $('.resulttext').css('display', 'inline')


            $('.Preuslt').css('width', `${relp0}%`)
            $('.Jreuslt').css('width', `${relp1}%`)
            $('.Ireuslt').css('width', `${relp2}%`)
            $('.Sreuslt').css('width', `${relp3}%`)
            $('.Ereuslt').css('width', `${relp4}%`)
            $('.Nreuslt').css('width', `${relp5}%`)
            $('.Freuslt').css('width', `${relp6}%`)
            $('.Treuslt').css('width', `${relp7}%`)


            let resultdiv = document.createElement('div')
            resultdiv.textContent(`Your result is:${window.user.En} ${window.user.Org} ${window.user.Dec} ${window.user.In}`)
            $('#question').append(resultdiv)
        } 

            // API.getFriends()
            //         .then(res => {}

                     

       

      
    //   })
    //   .catch(err => console.log(err));  

        else {

        this.setState({ answer: 0 })
        this.setState({ question: this.state.question + 1 })

       this.clearInput();
        }

    }

    handleChange = event => {

        this.setState({chosen : true})

        let swap = event.target.parentElement      

        let answerNum = 0;
   
        answerNum = parseInt(event.target.value);

        this.setState({answer : answerNum})

        $('label').attr('class', 'unchecked');
        $(swap).removeClass('unchecked')


 
    }

    clearInput = () => {  $('label').attr('class', 'unchecked'); this.setState({ chosen : false})}



    render() {
        return(
<div>


    



    <div id = "test-form" className="row quizdiv textdiv">
        <div id="question">
            {Questions[this.state.question]}
        </div>


        <span className="resulttext">Your Energy Result: {this.state.userType.Energy}</span>
        <div className = "resultmeter energyresults">
        
        <div className = "rhalfside"><p>Extrovert</p>
        <div className = "Lside Eresult" style={{width : this.state.userType.EnergyValue/21 * 100}}></div>
        </div>
        <div className = "lhalfside"><p>Introvert</p>
        <div className = "Rside Iresult" style={{width : this.state.userType.EnergyValue/15 * 100}}></div>
        </div>
        </div>

        <span className="resulttext">Your Organization Result: {this.state.userType.Organization}</span>
        <div className = "resultmeter organizationresults">
        
        <div className = "rhalfside"><p>Judger</p>
        <div className = "Lside Jresult" style={{width : this.state.userType.OrganizationValue/24 * 100}}></div>
        </div>
        <div className = "lhalfside"><p>Perceiver</p>
        <div className = "Rside Presult" style={{width : this.state.userType.OrganizationValue/21 * 100}}></div>
        </div>
        </div>
        
        <span className="resulttext">Your Decision Result: {this.state.userType.Decision}</span>
        <div className = "resultmeter decisionresults">
        
        <div className = "rhalfside dec"><p>Thinker</p>
        <div className = "Lside Tresult" style={{width : this.state.userType.DecisionValue/24 * 100}}></div>
        </div>
        <div className = "lhalfside dec2"><p>Feeler</p>
        <div className = "Rside Fresult" style={{width : this.state.userType.DecisionValue/36 * 100}}></div>
        </div>
        </div>

        <span className="resulttext">Your Information Result: {this.state.userType.Information}</span>
        <div className = "resultmeter informationresults">        
        <div className = "rhalfside"><p>Intuition</p>
        <div className = "Lside Nresult" style={{width : this.state.userType.InformationValue/30 * 100}}></div>
        </div>
        <div className = "lhalfside"><p>Sense</p>
        <div className = "Rside Sresult" style={{width : this.state.userType.InformationValue/9 * 100}}></div>
        </div>
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