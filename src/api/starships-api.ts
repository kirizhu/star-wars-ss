import { useState, useEffect, useCallback } from 'react';
import { StarshipItem } from '../model/starshipModels'; 
import useStarshipStore from '../store/starshipStore'; 
const BASE_URL = 'https://swapi.dev/api/starships/'; 

export async function fetchStarships(searchTerm: string, page: number): Promise<{starships: StarshipItem[], nextPage: number | null}> {
    
    console.log("fetchStarships: request")
    let url = `${BASE_URL}?${searchTerm ? `search=${encodeURIComponent(searchTerm)}&` : ''}page=${page}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const nextPage = data.next ? page + 1 : null;
        return { starships: data.results, nextPage };
    } catch (error) {
        throw error;
    }
}

export async function fetchStarshipByUrl(url: string): Promise<any> {
    console.log("fetchStarshipByUrl: request")
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error; 
    }
}

export const useFetchAllStarships = () => {
    const [starships, setStarships] = useState<StarshipItem[]>([]); 
    const [loading, setLoading] = useState<boolean>(false); 
    const [error, setError] = useState<Error | null>(null); 
    const [page, setPage] = useState<number|null>(1); 
    const { searchTerm, setStarShipDetail } = useStarshipStore();

    const handleFetchStarships = useCallback(async (page: number) => {
        console.log("useFetchAllStarships: handleFetchStarships")
        setLoading(true);
        try {
            const { starships: newStarships, nextPage } = await fetchStarships(searchTerm, page);
            if (page === 1) {
                setStarships(newStarships);
            } else {
                setStarships(prev => [...prev, ...newStarships]);
            }
            setPage(nextPage);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        handleFetchStarships(1);
    }, [searchTerm, handleFetchStarships]);

    const refreshStarships = () => {
        handleFetchStarships(1);
    };

    const loadMoreStarships = () => {
        if (page && !loading) {
            handleFetchStarships(page);
        }
    };

    const fetchStarship = useCallback(async (url: string) => {
        console.log("useFetchAllStarships: fetchStarships")
        setLoading(true);
        try {
            const data = await fetchStarshipByUrl(url);
            setStarShipDetail(data);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }, [setStarShipDetail]);

    return { starships, loading, error, refreshStarships, loadMoreStarships, fetchStarship};
};

/**
By using useCallback with searchTerm as the dependency, we ensure that handleFetchStarships
is only recreated when searchTerm changes, preventing unnecessary re-renders of components that 
depend on this function.
 */