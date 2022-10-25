import React from "react";
import NumberItem from "./NumberItem";

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5, 6]
    };
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num)
    }));
    console.log(this.state.nums);
  }

  render() {
    let nums = this.state.nums.map((n) => (
      <NumberItem value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h1 onClick={() => this.remove(2)}>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
