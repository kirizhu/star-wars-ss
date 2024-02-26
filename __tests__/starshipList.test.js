import React from 'react';
import { render } from '@testing-library/react-native';
import StarshipList from '../src/components/StarshipList/StarshipList.component';

describe('StarshipList', () => {
  it('renders StarshipList', () => {
    const { getByTestId } = render(<StarshipList error={false} loading={false}/>);
    const list = getByTestId('ship-list');
    expect(list).toBeTruthy();
  });
  it('renders ErrorComponent when error is true', () => {
    const { getByText } = render(<StarshipList error={true} loading={false} />);
    const errorComponent = getByText('Use the force to try again!')
    expect(errorComponent).toBeTruthy();
  }); 
});
