var React = require('react');

module.exports = React.createClass({
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
