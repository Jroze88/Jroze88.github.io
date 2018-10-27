import {Component} from 'react';


class TestQuestion extends Component {



    render() {
        return(
 
            <div ClassName="question-wrapper set1" data-question="1">
                <div ClassName="statement">
                    {this.props.children}
                </div>
                <div ClassName="row decision">
                    <div ClassName="hidden-xs col-sm-3 caption left sets-answer" data-value="-3">Agree</div>
                    <div ClassName="col-xs-12 col-sm-6 options btn-group" data-toggle="buttons" role="group" aria-label="Options">
                        <label ClassName="btn btn-default option agree max sets-answer" data-value="-3">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                        <label ClassName="btn btn-default option agree med sets-answer" data-value="-2">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                        <label ClassName="btn btn-default option agree min sets-answer" data-value="-1">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                        <label ClassName="btn btn-default option neutral sets-answer" data-value="0">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                        <label ClassName="btn btn-default option disagree min sets-answer" data-value="1">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                        <label ClassName="btn btn-default option disagree med sets-answer" data-value="2">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                        <label ClassName="btn btn-default option disagree max sets-answer" data-value="3">
                            <input type="radio" name="options" autocomplete="off"/>
                        </label>
                    </div>
                    <div ClassName="hidden-xs col-sm-3 caption right sets-answer" data-value="3">Disagree</div>
                </div>
                <div ClassName="row decision mobile visible-xs">
                    <div ClassName="col-xs-6 caption left">Agree</div>
                    <div ClassName="col-xs-6 caption right">Disagree</div>
                </div>
            </div>
        
            

        )
    }


}

export default TestQuestion