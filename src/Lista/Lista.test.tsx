import { getByText, render, screen} from '@testing-library/react';
import Lista from './index';

test('renders lista', () => {
  //rederizar o componente a ser testado
  render(<Lista/>);
  // buscar um elemento atraves de tag, texto, data-testid, etc
  const ulElement  = screen.getByTestId("itens");


expect(ulElement.children.length).toBe(2);

});

