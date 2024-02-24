import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('<App />', () => {
  it('renders the app container', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-container')).toBeTruthy(); // Ensure you have a testID on your icon or adjust this to match your assertion needs
  });
});
