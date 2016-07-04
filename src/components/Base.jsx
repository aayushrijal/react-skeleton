var React = require('react');

var Base = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Header</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Base;
