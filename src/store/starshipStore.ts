import { StarshipDetail } from './../model/starshipModels';
import {create} from 'zustand'
import { StarshipItem } from '../model/starshipModels';

export interface StarshipState {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    placeholder: string;
    showModal: boolean;
    setShowModal: (showModal:boolean) => void;
    starshipItem: StarshipItem|null;
    starshipDetail: StarshipDetail|null;
    setStarShipDetail: (starshipDetail:StarshipDetail) => void;
}

const useStarshipStore = create<StarshipState>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm: string) => set({ searchTerm }),
    placeholder: 'Search for starships',
    showModal: false,
    setShowModal: (showModal:boolean) => set({showModal}),
    starshipItem: null,
    starshipDetail:null,
    setStarShipDetail: (starshipDetail:StarshipDetail) => set ({starshipDetail})
}));

export default useStarshipStore;
