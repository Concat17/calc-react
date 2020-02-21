import * as React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import { CalculatorState } from "../CalculatorState";

import { calculate } from "../logic/calculate";

type AppState = {
  total: number | null;
  next: number | null;
  operation: string | null;
};

export class App extends React.Component<{}, CalculatorState> {
  state: CalculatorState = {
    total: null,
    next: null,
    operation: null
  };

  handleClick = (buttonName: string) => {
    this.setState(calculate(this.state, buttonName));
    console.log(this.state);
  };

  public render(): JSX.Element {
    return (
      <div className="container bordered">
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
