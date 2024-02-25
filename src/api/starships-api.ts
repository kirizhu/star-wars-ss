import { useState, useEffect, useCallback } from 'react';
import { StarshipItem } from '../model/starshipModels';
import useStarshipStore from '../store/starshipStore';
const BASE_URL = 'https://swapi.dev/api/starships/'

export const useFetchAllStarships = () => {
  const [starships, setStarships] = useState<StarshipItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [nextPage, setNextPage] = useState<number | null>(1); // Allow null and number

  const { searchTerm } = useStarshipStore(); // Get searchTerm from Zustand store

  // Adjust fetchStarships to accept a nextPage parameter
  const fetchStarships = useCallback(async (searchTerm: string, page: number) => {
    setLoading(true);
    // Construct URL based on whether there's a search term and the current page
    let url = `${BASE_URL}?${searchTerm ? `search=${encodeURIComponent(searchTerm)}&` : ''}page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNextPage(data.next ? page + 1 : null); // Update nextPage for pagination or set it to null if there's no next page
      // Append new results to starships or replace based on if it's a new search or pagination
      setStarships(prev => page === 1 ? data.results : [...prev, ...data.results]);
    } catch (error) {
      console.error(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial and new searches
  useEffect(() => {
    fetchStarships(searchTerm, 1); // Always start from the first page on new search
  }, [searchTerm]);

  // Refreshing doesn't need to be a separate function if it behaves the same as initial fetch
  const refreshStarships = () => {
    fetchStarships(searchTerm, 1); // Refresh is essentially a new search
  };

  // Load more starships for pagination
  const loadMoreStarships = () => {
    if (nextPage && !loading) {
      fetchStarships(searchTerm, nextPage);
    }
  };

  return { starships, loading, error, refreshStarships, loadMoreStarships };
};



export const useFetchStarshipById = () => {
  const {starshipDetail, setStarShipDetail} = useStarshipStore()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchStarship = async (url:string) => {

    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStarShipDetail(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };
  return { starshipDetail, loading, error, fetchStarship };
};



