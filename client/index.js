var React = require('react');
var ReactDOM = require('react-dom');
var FileInput = require('./file-input');

var App = React.createClass({
  getInitialState: function() {
    return {
      text: ''
    };
  },
  onChange: function(val) {
    this.setState({
      text: val
    });
  },
  render: function() {
    return (
      <form>
        <div className="form-group">
          <FileInput className="form-control" onChange={this.onChange} />
            <p className="help-block">Select a CSV file.</p>
        </div>
        <textarea disabled="true" className="form-control" value={this.state.text} />
      </form>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('root'));
