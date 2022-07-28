import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Página do contador", () => {
  test("Botão de soma realiza uma soma, de zero para 1.", () => {
    const { getByText } = render(<App />);
    const botaoSomar = getByText(/Somar/); // Se não houver elemento, getBy->erro; query->null
    userEvent.click(botaoSomar);
    // throw new Error();
    const contador = getByText(/Contador/i);
    expect(contador).toHaveTextContent("Contador: 1");
  });

  test.todo("Contador inicia com valor 0");
  const contador = 0;

  expect(contador).toEqual(true);

  test.todo("Depois de apertar 'Somar', contador não diminui");
  const { getByText } = render(<App />);
  const botaoSomar = getByText(/Somar/);
  userEvent.click(botaoSomar);
  // throw new Error();
  const contadors = getByText(/Contador/i);
  expect(contadors).toHaveTextContent("Contador: -1");
});

/**
 *
 * (get|find|query)(All|)By(Text|LabelText|PlaceholderText|TestId)
 *
 */
