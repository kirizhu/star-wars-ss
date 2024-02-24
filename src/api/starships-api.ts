import { useState, useEffect } from 'react';

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[]; 
  films: string[]; 
  created: string;
  edited: string;
  url: string;
}

export const useFetchAllStarships = () => {
    const [starships, setStarships] = useState<Starship[]>([])
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
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStarship = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
      const data = await response.json();
      setStarship(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { starship, loading, error, fetchStarship };
};



