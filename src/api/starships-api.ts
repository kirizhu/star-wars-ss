import { useState, useEffect, useCallback } from 'react';
import { StarshipItem } from '../model/starshipModels';
import useStarshipStore from '../store/starshipStore';
const BASE_URL = 'https://swapi.dev/api/starships/'

export const useFetchAllStarships = () => {
  const [starships, setStarships] = useState<StarshipItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [nextPage, setNextPage] = useState<number | null>(1); 

  const { searchTerm } = useStarshipStore(); 

  const fetchStarships = useCallback(async (searchTerm: string, page: number) => {
    setLoading(true);
    let url = `${BASE_URL}?${searchTerm ? `search=${encodeURIComponent(searchTerm)}&` : ''}page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNextPage(data.next ? page + 1 : null); 
      setStarships(prev => page === 1 ? data.results : [...prev, ...data.results]);
    } catch (error) {
      console.error(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStarships(searchTerm, 1); 
  }, [searchTerm]);

  const refreshStarships = () => {
    fetchStarships(searchTerm, 1);
  };

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



