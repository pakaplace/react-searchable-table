var React = require('react');
var ReactDOM = require('react-dom');
var FileInput = require('./file-input');
var parse = require('csv-parse');
var _ = require('underscore');

var App = React.createClass({
  // doSearch:function(queryText){
  //       console.log(queryText)
  //       //get query result
  //       var queryResult=[];
  //       this.props.data.forEach(function(person){
  //           if(person.name.toLowerCase().indexOf(queryText)!=-1)
  //           queryResult.push(person);
  //       });

  //       this.setState({
  //           query:queryText,
  //           filteredData: queryResult
  //       })
  //   },
    doSearch: function(event){
      var query = event.target.value;
      console.log(query)
      var result = [];
      // this.state.initalText.forEach(function(book){
      //   if(book[3].toLowerCase().indexOf(query !== -1){
      //     result.push(book)
      //   })
      //   if(book[4].toLowerCase().indexOf(query !== -1){
      //     result.push(book)
      //   })
      // })
      result = this.state.initialText.filter(function(row) {
        for(var i = 0; i < row.length; i++) {
          var cell = row[i]

          if (cell.toLowerCase().indexOf(query.toLowerCase()) !==-1){
            return true;
          }
        }
        return false;
      });
      result.unshift(this.state.initialText[0]);
      console.log(result)
      this.setState({
        text: result
      })
    },
    getInitialState: function() {
        return {
            text: [[]],
            initialText: [[]],
            newText:[[]]
        };
    },
    onChange: function(val) {
        var that = this;
        parse(val, {}, function(err, data){
            if(err){
                console.log('error parsing', err);
            } else{
                that.setState({
                    initialText: data,
                    text: data,
                    newText:data
                });
            }
        })
    },
    sortColumn: function(val){
      var id = val.target.id;
      var headers = this.state.text[0];
      var arr = this.state.text;
      console.log('arr has ', arr.length, ' elements');
      // var text2 = arr.slice();
      arr.slice(1);
      var sorted = _.sortBy(arr, function(a){return a[id]});
      console.log('sorted has ', sorted.length, ' elements');
      var newArray = sorted.unshift(headers);
      this.setState({
        newText: sorted
      })
      console.log("Result: ", newArray);
    },
    render: function() {
        var items = [];
        var row = [];
        for (var k = 0; k < this.state.text[0].length; k++) {
            row.push(<th key={k} onClick = {this.sortColumn} id = {k} >{this.state.text[0][k]}</th>);
            // console.log({k});
        }
        items.push(<tr key={0}>{row}</tr>);
        for (var i = 1; i < this.state.text.length; i++){
            var row = [];
            for (var j = 0; j< this.state.text[i].length; j++){
                row.push(<td key={i+","+j}>{this.state.text[i][j]}</td>)
            }
            items.push(<tr key={i}>{row}</tr>);
        }
        return <form>
                    <div className="form-group">
                        <FileInput className="form-control" onChange={this.onChange} />
                        <p className="help-block">Select a CSV file.</p>
                    </div>
                    <input name="search" type = "text" placeholder = "search" onChange = {this.doSearch}/>
                    <table className="table table-bordered">
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </form>
        }
});
ReactDOM.render(<App/>, document.getElementById('root'));