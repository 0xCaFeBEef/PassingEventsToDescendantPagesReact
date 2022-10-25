import React, { Component } from "react";

class ButtonList extends Component {
  static defaultProps = {
    colors: ["red", "blue", "yellow", "purple"]
  };
  constructor(props) {
    super(props);
    this.state = {
      color: "green"
    };
  }

  changeColor(newColor, e) {
    console.log(`newColor is: ${newColor}`, e, e.ctrlKey);
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className="ButtonList" style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((c) => {
          const colorObj = { backgroundColor: c };
          return (
            <button style={colorObj} onClick={(e) => this.changeColor(c, e)}>
              Click me!!!
            </button>
          );
        })}
      </div>
    );
  }
}

export default ButtonList;
