import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StarshipDetailModal from '../src/components/StarshipDetailModal/StarshipDetailModal.component';


describe('StarshipDetailModal', () => {
  it('renders modal when showModal is true', () => {
    const closeModal = jest.fn()
    const { getByTestId } = render(<StarshipDetailModal showModal={true} closeModal={closeModal} />);
    const modal = getByTestId('modal');
    expect(modal).toBeTruthy();
  });
  it('triggers closeModal function when close button is pressed', () => {
    const closeModal = jest.fn()
    const { getByText } = render(<StarshipDetailModal closeModal={closeModal} />);
    const closeButton = getByText('Close')
    console.log(closeButton)
    fireEvent.press(closeButton);
    expect(closeModal).toHaveBeenCalled();
  });
});
