import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import StarshipDetailModal from '../src/components/StarshipDetailModal/StarshipDetailModal.component';


describe('StarshipDetailModal', () => {
  it('renders modal when showModal is true', () => {
    // Mocking the closeModal function
    const closeModal = jest.fn();
    // Rendering the StarshipDetailModal component with showModal set to true and providing the closeModal function
    const { getByTestId } = render(<StarshipDetailModal showModal={true} closeModal={closeModal} />);
    // Retrieving the modal element by its testID
    const modal = getByTestId('modal');
    // Expecting that the modal element exists
    expect(modal).toBeTruthy();
  });

  it('triggers closeModal function when close button is pressed', () => {
    // Mocking the closeModal function
    const closeModal = jest.fn();
    // Rendering the StarshipDetailModal component and providing the closeModal function
    const { getByText } = render(<StarshipDetailModal closeModal={closeModal} />);
    // Retrieving the close button element by its text content
    const closeButton = getByText('Close');
    // Simulating a press event on the close button
    fireEvent.press(closeButton);
    // Expecting that the closeModal function has been called
    expect(closeModal).toHaveBeenCalled();
  });
});

