import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddCategory from './AddCategory';

describe('<AddCategory />', () => {
  test('it should mount', () => {
    render(<AddCategory />);
    
    const addCategory = screen.getByTestId('AddCategory');

    expect(addCategory).toBeInTheDocument();
  });
});