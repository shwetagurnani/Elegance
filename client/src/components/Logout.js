import React from "react";
import { authContext } from "./context/Auth";

export default class Logout extends React.Component {
  static contextType = authContext;
  componentDidMount() {
    localStorage.clear();
    console.log({ c: this.context.dispatch });
    this.context.dispatch({ type: "LOG_OUT" });
    this.props.history.push("/");
  }
  render() {
    return <div></div>;
  }
}
