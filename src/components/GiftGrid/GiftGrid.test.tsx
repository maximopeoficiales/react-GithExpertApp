import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GiftGrid from './GiftGrid';

describe('<GiftGrid />', () => {
  test('it should mount', () => {
    render(<GiftGrid />);
    
    const giftGrid = screen.getByTestId('GiftGrid');

    expect(giftGrid).toBeInTheDocument();
  });
});