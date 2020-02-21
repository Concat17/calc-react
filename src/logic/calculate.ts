import { CalculatorState } from "../CalculatorState";
import { isNumber } from "./isNumber";

export function calculate(
  state: CalculatorState,
  buttonName: string
): CalculatorState {
  if (isNumber(buttonName)) {
    if (state.next === null) {
      return {
        total: state.total,
        next: parseInt(buttonName),
        operation: state.operation
      };
    }
  } else {
    if (state.operation === null) {
      return {
        total: state.total,
        next: state.next,
        operation: buttonName
      };
    }
  }
  return {} as CalculatorState;
}
