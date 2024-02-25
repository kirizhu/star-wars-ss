import { useState, useEffect } from 'react';
import { StarshipDetail, StarshipItem } from '../model/starshipModels';
import useStarshipStore from '../store/starshipStore';



export const useFetchAllStarships = () => {
    const [starships, setStarships] = useState<StarshipItem[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [nextPage, setNextPage] = useState('https://swapi.dev/api/starships/');
  
    const fetchStarships = async (url = 'https://swapi.dev/api/starships/') => {
      if (!url || loading) return;
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNextPage(data.next); 
        setStarships(prevStarships => [...prevStarships, ...data.results]);
      } catch (error) {
        console.log(error)
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchStarships();
    }, []);
  
    const refreshStarships = () => {
      setStarships([]);
      setNextPage('https://swapi.dev/api/starships/');
      fetchStarships('https://swapi.dev/api/starships/');
    };
  
    return { starships, loading, error, fetchStarships: () => fetchStarships(nextPage), refreshStarships };
  };
  

export const useFetchStarshipById = () => {
  const {starshipDetail, setStarShipDetail} = useStarshipStore()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStarship = async (url:string) => {

    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStarShipDetail(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { starshipDetail, loading, error, fetchStarship };
};



