var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
    onSubmit: function(){
        if(!this.refs.fieldEmail.state.valid){
            alert("You suck at filling forms. Email is always required in a lead capture form. Dummy!");
        }
        else {
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                firstName: this.refs.fieldName.state.value
            };
            this.refs.fieldName.clear();
            this.refs.fieldEmail.clear();
        }
    },

    render: function(){
        return (
            <div className="row">
                <div className="col-sm-3">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <NameField type="First" ref="fieldName"/>
                            <EmailField ref="fieldEmail"/>
                            <button className="btn btn-primary" onClick={this.onSubmit} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
