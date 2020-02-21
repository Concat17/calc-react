import * as React from "react";

import "./Button.css";

type ButtonProps = {
  name: string;
  clickHandler: any;
};

export default class Button extends React.Component<ButtonProps> {
  handlerClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <button className="button" onClick={this.handlerClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}
