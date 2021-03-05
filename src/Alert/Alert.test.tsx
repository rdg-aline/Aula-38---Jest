import { render, screen } from '@testing-library/react';
import Alert from './index';

test('teste alert', () => {
  render(<Alert/>);
  const  alertElement = screen.getByText(/você deve aceitar os termos/i) ;
  expect(alertElement).toBeInTheDocument();
  
  
});

