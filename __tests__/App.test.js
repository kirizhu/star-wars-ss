import React from 'react';
import {render, act , renderHook} from '@testing-library/react-native';
import App from '../App';
import SearchBar from '../src/components/SearchBar/SearchBar.component';
import useStarshipStore from '../src/store/starshipStore';
import { fetchStarshipByUrl, fetchStarships } from '../src/api/starships-api';

describe('<App />', () => {
  it('renders the app container', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app-container')).toBeTruthy();
  });

});

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

describe('fetchStarships', () => {
  beforeEach(() => {
    global.fetch = jest.fn(); 
  });

  afterEach(() => {
    global.fetch.mockClear(); 
  });

  it('fetches starships successfully from the API', async () => {
    const testData = {
      results: [{ name: 'Starship 1' }, { name: 'Starship 2' }],
      next: 'https://swapi.dev/api/starships/?page=2'
    };
    global.fetch.mockResolvedValue({
      json: async () => testData
    });

    const result = await fetchStarships('some-search', 1);

    expect(global.fetch).toHaveBeenCalledWith(
      'https://swapi.dev/api/starships/?search=some-search&page=1'
    );
    expect(result.starships).toEqual(testData.results);
    expect(result.nextPage).toEqual(2);
  });

  it('handles errors when fetching starships from the API', async () => {
    const errorMessage = 'Failed to fetch starships';
    global.fetch.mockRejectedValue(new Error(errorMessage));

    await expect(fetchStarships('some-search', 1)).rejects.toThrow(errorMessage);
  });
});

describe('fetchStarshipByUrl', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('fetches a starship by URL successfully', async () => {
    const testData = { name: 'Millennium Falcon' };
    const mockResponse = {
      json: async () => testData
    };
    global.fetch.mockResolvedValue(mockResponse);

    const result = await fetchStarshipByUrl('https://swapi.dev/api/starships/10/');

    expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/starships/10/');
    expect(result).toEqual(testData);
  });

  it('handles errors when fetching a starship by URL', async () => {
    const errorMessage = 'Failed to fetch starship';
    global.fetch.mockRejectedValue(new Error(errorMessage));

    await expect(fetchStarshipByUrl('https://swapi.dev/api/starships/10/')).rejects.toThrow(errorMessage);
  });
});