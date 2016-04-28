var helloComponent = React.createClass({

  getInitialState: function(){
    return {name:"hola"};
  },
  renderHobies: function(){
    return (
      <ul>
      {
        this.props.hobbies.map(function(hobby){
          return <li key={hobby.name}>{hobby.name}</li>;
        })
      }
      </ul>
    )
  },
  showName: function(){
    alert('Hey');
  },
  render: function(){
    var name = "hola";

    //setTimeout(function(){
    //  this.setState({name: 'Juan '});
    //}.bind(this), 2000);

    //return <div className=""> {this.state.name + this.props.name} </div>;
    return (
      <div className="jumbotron">
          <h1>{this.props.name}</h1>
          {this.renderHobies()}
          {this.props.children}
      </div>

      // <ul>
      // {
      //   this.props.hobbies.map(function(hobby){
      //     return <li>{hobby.name}</li>;
      //   })
      // }
      // </ul>
    );
  }
});

module.exports = helloComponent;
