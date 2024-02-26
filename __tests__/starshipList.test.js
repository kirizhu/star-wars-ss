import React from 'react';
import { render } from '@testing-library/react-native';
import StarshipList from '../src/components/StarshipList/StarshipList.component';

describe('StarshipList', () => {
  it('renders empty StarshipList', () => {
    const { getByTestId , getByText} = render(<StarshipList error={false} loading={false}/>);
    const list = getByTestId('ship-list');
    const emptyList =getByText(`These are not the starships 
    you are looking for...`)
    expect(list).toBeTruthy();
    expect(emptyList).toBeTruthy();
  });
  it('renders ErrorComponent when error is true', () => {
    const { getByText } = render(<StarshipList error={true} loading={false} />);
    const errorComponent = getByText('Use the force to try again!')
    expect(errorComponent).toBeTruthy();
  }); 
});
