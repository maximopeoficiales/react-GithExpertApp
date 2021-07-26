import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GiftGridItem from './GiftGridItem';

describe('<GiftGridItem />', () => {
  test('it should mount', () => {
    render(<GiftGridItem />);
    
    const giftGridItem = screen.getByTestId('GiftGridItem');

    expect(giftGridItem).toBeInTheDocument();
  });
});