export function operate(
  total: string | null,
  next: string | null,
  operation: string
): number {
  const one = Number(total) || 0;
  const two = Number(next) || replaceNull(operation);

  switch (operation) {
    case "+":
      return one + two;
    case "-":
      return one - two;
    case "*":
      return one * two;
    case "/":
      return one / two;
    default:
      throw new Error("Unknown operation");
  }
}

function replaceNull(operation: string): number {
  switch (operation) {
    case "+":
    case "-":
      return 0;
    case "*":
    case "/":
      return 1;
    default:
      throw new Error("Unknown operation");
  }
}
