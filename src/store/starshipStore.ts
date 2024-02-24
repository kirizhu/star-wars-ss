import { create } from 'zustand'

export interface StarshipState {
    searchTerm: string
    setSearchTerm: (term: string) => void
    placeholder: string
}

const useStarshipStore = create((set) => ({
    searchTerm: '',
    setSearchTerm: (term: string) => set({ searchTerm: term }),
    placeholder: 'Search for starships'
}))

export default useStarshipStore
