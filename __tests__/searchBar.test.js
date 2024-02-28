import React from 'react';
import {render, act , renderHook} from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar/SearchBar.component';
import useStarshipStore from '../src/store/starshipStore';

describe('SearchBar', () => {
  it('renders correctly with initial placeHolder', () => {
    // Rendering the SearchBar component
    const { getByPlaceholderText } = render(<SearchBar />);
    // Expecting that an element with the placeholder text 'Search for starships' exists
    expect(getByPlaceholderText('Search for starships')).toBeTruthy();
  });

  it('updates searchTerm state on setSearchTerm call', () => {
    // Rendering the custom hook useStarshipStore
    const {result} = renderHook(()=> useStarshipStore());
    // Expecting that the initial value of searchTerm is an empty string
    expect(result.current.searchTerm).toEqual('');
    // Calling the setSearchTerm function with 'X-wing' as the argument
    act(() => result.current.setSearchTerm('X-wing'));
    // Expecting that the searchTerm state is updated to 'X-wing'
    expect(result.current.searchTerm).toEqual('X-wing');
  });
});