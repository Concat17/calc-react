import * as React from "react";
import Button from "./Button";

import "./ButtonPanel.css";

type ButtonPanelProps = {
  clickHandler: any;
};

export default class ButtonPanel extends React.Component<ButtonPanelProps> {
  handleClick = (buttonName: string) => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="button_panel">
        <Button name="1" clickHandler={this.handleClick} />
        <Button name="2" clickHandler={this.handleClick} />
        <Button name="3" clickHandler={this.handleClick} />
        <Button name="+" clickHandler={this.handleClick} />
        <Button name="4" clickHandler={this.handleClick} />
        <Button name="5" clickHandler={this.handleClick} />
        <Button name="6" clickHandler={this.handleClick} />
        <Button name="-" clickHandler={this.handleClick} />
        <Button name="7" clickHandler={this.handleClick} />
        <Button name="8" clickHandler={this.handleClick} />
        <Button name="9" clickHandler={this.handleClick} />
        <Button name="*" clickHandler={this.handleClick} />
        <Button name="AC" clickHandler={this.handleClick} />
        <Button name="0" clickHandler={this.handleClick} />
        <Button name="=" clickHandler={this.handleClick} />
        <Button name="/" clickHandler={this.handleClick} />
      </div>
    );
  }
}
