var React = require('react');
var ReactDOM = require('react-dom');

var FileInput = React.createClass({
  onChange: function(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = this.onFileRead;
    reader.readAsText(file);
  },
  onFileRead: function(event) {
    this.props.onChange(event.target.result);
  },
  render: function() {
    return <input type="file" onChange={this.onChange} />;
  }
});

var Master = React.createClass({
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
        </div>
        <textarea disabled={true} className="form-control" value={this.state.text} />
      </form>
    );
  }
});

ReactDOM.render(<Master/>, document.getElementById('root'));
