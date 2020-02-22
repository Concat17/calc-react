import { CalculatorState } from "../CalculatorState";
import { isNumber } from "./isNumber";
import { operate } from "./operate";

export function calculate(
  state: CalculatorState,
  buttonName: string
): CalculatorState {
  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operation: null
    };
  }

  if (isNumber(buttonName)) {
    if (state.next === null) {
      return {
        total: state.total,
        next: buttonName,
        operation: state.operation
      };
    } else if (state.total === null) {
      if (state.operation === null) {
        return {
          total: state.total,
          next: state.next + buttonName,
          operation: state.operation
        };
      } else {
        return {
          total: state.next,
          next: buttonName,
          operation: state.operation
        };
      }
    } else {
      return {
        total: state.total,
        next: state.next + buttonName,
        operation: state.operation
      };
    }
  }

  if (state.operation === null) {
    return {
      total: state.total,
      next: state.next,
      operation: buttonName
    };
  }

  if (buttonName === "=") {
    return {
      total: operate(state.total, state.next, state.operation).toString(),
      next: null,
      operation: null
    };
  }

  if (state.operation !== null) {
    return {
      total: operate(state.total, state.next, state.operation).toString(),
      next: null,
      operation: buttonName
    };
  }
  return {
    total: state.next,
    next: null,
    operation: buttonName
  };
}
