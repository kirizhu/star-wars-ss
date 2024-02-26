import React from 'react';
import {render, fireEvent, act , renderHook} from '@testing-library/react-native';
import App from '../App';
import SearchBar from '../src/components/SearchBar/SearchBar.component';
import useStarshipStore from '../src/store/starshipStore';


// Now, when you run your test, the setSearchTermMock should be correctly called


describe('<App />', () => {
  it('renders the app container', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-container')).toBeTruthy();
  });

});

describe('SearchBar', () => {
  it('renders correctly with initial state', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    expect(getByPlaceholderText('Search for starships')).toBeTruthy();
  });

  it('updates search term on setSearchTerm call', () => {
    const {result} = renderHook(()=> useStarshipStore())
    expect(result.current.searchTerm).toEqual('')
    act(() => result.current.setSearchTerm('X-wing'));
    expect(result.current.searchTerm).toEqual('X-wing');
  });
});
