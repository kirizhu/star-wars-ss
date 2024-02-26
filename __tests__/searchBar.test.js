import React from 'react';
import {render, act , renderHook} from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar/SearchBar.component';
import useStarshipStore from '../src/store/starshipStore';

describe('SearchBar', () => {
    it('renders correctly with initial placeHolder', () => {
      const { getByPlaceholderText } = render(<SearchBar />);
      expect(getByPlaceholderText('Search for starships')).toBeTruthy();
    });
  
    it('updates searchTerm state on setSearchTerm call', () => {
      const {result} = renderHook(()=> useStarshipStore())
      expect(result.current.searchTerm).toEqual('')
      act(() => result.current.setSearchTerm('X-wing'));
      expect(result.current.searchTerm).toEqual('X-wing');
    });
  });