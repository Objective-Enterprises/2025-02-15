import { Component } from "react";

export default class Goodbye extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <p>Goodbye {this.props.person}</p>
    )
  }
}