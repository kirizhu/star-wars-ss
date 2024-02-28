import { useState, useEffect, useCallback } from 'react';
import { StarshipItem } from '../model/starshipModels'; 
import useStarshipStore from '../store/starshipStore'; 
const BASE_URL = 'https://swapi.dev/api/starships/'; 

export async function fetchStarships(searchTerm: string, page: number): Promise<{starships: StarshipItem[], nextPage: number | null}> {
    // Constructing the URL based on the search term and page number
    let url = `${BASE_URL}?${searchTerm ? `search=${encodeURIComponent(searchTerm)}&` : ''}page=${page}`;
    try {
        // Fetching data from the constructed URL
        const response = await fetch(url);
        // Parsing the response JSON data
        const data = await response.json();
        // Calculating the next page number based on the 'next' property in the response
        const nextPage = data.next ? page + 1 : null;
        // Returning an object containing the fetched starships and the next page number
        return { starships: data.results, nextPage };
    } catch (error) {
        // Throwing any encountered errors
        throw error;
    }
}

export const useFetchAllStarships = () => {
    const [starships, setStarships] = useState<StarshipItem[]>([]); 
    const [loading, setLoading] = useState<boolean>(false); 
    const [error, setError] = useState<Error | null>(null); 
    const [page, setPage] = useState<number|null>(1); 

    const { searchTerm } = useStarshipStore(); // Accessing the search term from the starship store

    // Function to handle fetching starships data
    const handleFetchStarships = useCallback(async (page: number) => {
        setLoading(true); // Setting loading status to true
        try {
            // Fetching starships data using the provided search term and page number
            const { starships: newStarships, nextPage } = await fetchStarships(searchTerm, page);
            // Updating starships state based on the fetched data
            if (page === 1) {
                setStarships(newStarships);
            } else {
                setStarships(prev => [...prev, ...newStarships]);
            }
            // Updating the current page number
            setPage(nextPage);
        } catch (error) {
            // Handling any encountered errors
            setError(error as Error);
        } finally {
            // Setting loading status to false after completion
            setLoading(false);
        }
    }, [searchTerm]);

    // Effect to fetch starships data when the component mounts or when the search term changes
    useEffect(() => {
        handleFetchStarships(1);
    }, [searchTerm, handleFetchStarships]);

    // Function to manually refresh starships data
    const refreshStarships = () => {
        handleFetchStarships(1);
    };

    // Function to load more starships data
    const loadMoreStarships = () => {
        if (page && !loading) {
            handleFetchStarships(page);
        }
    };

    // Returning the state variables and functions for external use
    return { starships, loading, error, refreshStarships, loadMoreStarships };
};


export async function fetchStarshipByUrl(url: string): Promise<any> {
    try {
        // Fetching starship details using the provided URL
        const response = await fetch(url);
        // Parsing the response JSON data
        const data = await response.json();
        // Returning the fetched starship details
        return data;
    } catch (error) {
        // Throwing any encountered errors
        throw error; 
    }
}

export const useFetchStarshipByUrl = () => {
    const { setStarShipDetail } = useStarshipStore(); 
    const [loading, setLoading] = useState<boolean>(false); 
    const [error, setError] = useState<Error | null>(null); 

    // Function to fetch starship details by URL
    const fetchStarship = useCallback(async (url: string) => {
        setLoading(true); // Setting loading status to true
        try {
            // Fetching starship details using the provided URL
            const data = await fetchStarshipByUrl(url);
            // Setting the fetched starship details in the store
            setStarShipDetail(data);
        } catch (error) {
            // Handling any encountered errors
            setError(error as Error);
        } finally {
            // Setting loading status to false after completion
            setLoading(false);
        }
    }, [setStarShipDetail]);

    // Returning the state variables and function for external use
    return { loading, error, fetchStarship };
};

/**
By using useCallback with searchTerm as the dependency, we ensure that handleFetchStarships
is only recreated when searchTerm changes, preventing unnecessary re-renders of components that 
depend on this function.
 */