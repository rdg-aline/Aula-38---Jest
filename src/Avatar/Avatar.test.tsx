import { render, screen } from '@testing-library/react';
import Avatar from './index';

test('teste avatar', () => {
  render(<Avatar />);
    const animeElement = screen.getByAltText("goku");
    expect(animeElement).toBeInTheDocument();

    });



