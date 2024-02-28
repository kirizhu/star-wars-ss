import React from 'react';
import { render } from '@testing-library/react-native';
import StarshipList from '../src/components/StarshipList/StarshipList.component';

describe('StarshipList', () => {
  it('renders empty StarshipList', () => {
    // Rendering the StarshipList component with error and loading flags set to false
    const { getByTestId , getByText} = render(<StarshipList error={false} loading={false}/>);
    // Retrieving the list element by its testID
    const list = getByTestId('ship-list');
    // Retrieving the empty list message element by its text content
    const emptyList = getByText(`These are not the starships 
    you are looking for...`);
    // Expecting that both the list element and the empty list message element exist
    expect(list).toBeTruthy();
    expect(emptyList).toBeTruthy();
  });
  it('renders ErrorComponent when error is true', () => {
    const refreshStarships = jest.fn();
    // Rendering the StarshipList component with error flag set to true and loading flag set to false
    const { getByText } = render(<StarshipList error={true} loading={false} refreshStarships={refreshStarships} />);
    // Retrieving the error message element by its text content
    const errorComponent = getByText('Use the force to try again!');
    // Expecting that the error message element exists
    expect(errorComponent).toBeTruthy();
  }); 
});
