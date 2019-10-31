import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';



class SurveyForm extends Component {

    renderFields(){
        return _.map(formFields, ({ label, name }) => {
            return ( <Field key={name} component={SurveyField} type="text" label={label} name={name} /> );
        });
    }
 
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat flat white-text">
                        <i className="material-icons left">cancel</i>
                        Cancel
                    </Link>
                    <button 
                    className="teal btn-flat right white-text" 
                    type="submit">
                        Next
                    <i className="material-icons right">navigate_next</i>
                    </button>
                </form>
            </div>
        );
    }

}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {

        if(!values[name]) {
            if(name == 'emails'){
                errors[name] = 'You must provide ' + name + ".";
            } else {
                errors[name] = 'You must provide a ' + name + ".";
            }
            
        }

    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);