import { fetchStarshipByUrl, fetchStarships } from '../src/api/starships-api';


describe('fetchStarships', () => {
  // Set up mock for fetch before each test
  beforeEach(() => {
      global.fetch = jest.fn(); // Mocking the fetch function
  });

  // Clear mock after each test
  afterEach(() => {
      global.fetch.mockClear(); // Clearing the mock
  });

  // Test case: Fetching starships successfully from the API
  it('fetches starships successfully from the API', async () => {
      // Mock data for successful fetch
      const testData = {
          results: [{ name: 'Starship 1' }, { name: 'Starship 2' }],
          next: 'https://swapi.dev/api/starships/?page=2'
      };
      // Mock fetch response
      global.fetch.mockResolvedValue({
          json: async () => testData // Mocking the response JSON
      });

      // Call the fetchStarships function
      const result = await fetchStarships('some-search', 1);

      // Assertions
      expect(global.fetch).toHaveBeenCalledWith(
          'https://swapi.dev/api/starships/?search=some-search&page=1'
      ); // Verify that fetch was called with the correct URL
      expect(result.starships).toEqual(testData.results); // Verify that the fetched starships match the expected data
      expect(result.nextPage).toEqual(2); // Verify that the next page number is as expected
  });

  // Test case: Handling errors when fetching starships from the API
  it('handles errors when fetching starships from the API', async () => {
      // Mock error message
      const errorMessage = 'Failed to fetch starships';
      // Mock fetch rejection with error
      global.fetch.mockRejectedValue(new Error(errorMessage));

      // Assertion using expect().rejects.toThrow() to check if an error is thrown
      await expect(fetchStarships('some-search', 1)).rejects.toThrow(errorMessage);
  });
});

describe('fetchStarshipByUrl', () => {
  // Set up mock for fetch before each test
  beforeEach(() => {
      global.fetch = jest.fn(); // Mocking the fetch function
  });

  // Clear mock after each test
  afterEach(() => {
      global.fetch.mockClear(); // Clearing the mock
  });

  // Test case: Fetching a starship by URL successfully
  it('fetches a starship by URL successfully', async () => {
      // Mock data for successful fetch
      const testData = { name: 'Millennium Falcon' };
      // Mock fetch response
      global.fetch.mockResolvedValue({
          json: async () => testData // Mocking the response JSON
      });
      // Call the fetchStarshipByUrl function
      const result = await fetchStarshipByUrl('https://swapi.dev/api/starships/10/');
      // Assertions
      expect(global.fetch).toHaveBeenCalledWith('https://swapi.dev/api/starships/10/'); // Verify that fetch was called with the correct URL
      expect(result).toEqual(testData); // Verify that the fetched starship matches the expected data
  });

  // Test case: Handling errors when fetching a starship by URL
  it('handles errors when fetching a starship by URL', async () => {
      // Mock error message
      const errorMessage = 'Failed to fetch starship';
      // Mock fetch rejection with error
      global.fetch.mockRejectedValue(new Error(errorMessage));
      // Assertion using expect().rejects.toThrow() to check if an error is thrown
      await expect(fetchStarshipByUrl('https://swapi.dev/api/starships/10/')).rejects.toThrow(errorMessage);
  });
});
