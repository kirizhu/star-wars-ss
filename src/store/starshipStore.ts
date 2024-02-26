import {create} from 'zustand'
import { StarshipItem } from '../model/starshipModels';

export interface StarshipState {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    placeholder: string;
    showModal: boolean;
    setShowModal: (showModal:boolean) => void;
    starshipItem: StarshipItem|null;
    starshipDetail: StarshipItem|null;
    setStarShipDetail: (starshipDetail:StarshipItem) => void;
    starshipUrl:string;
    setStarshipUrl:(starshipUrl:string) => void;
}

const useStarshipStore = create<StarshipState>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm: string) => set({ searchTerm }),
    placeholder: 'Search for starships',
    showModal: false,
    setShowModal: (showModal:boolean) => set({showModal}),
    starshipItem: null,
    starshipDetail:null,
    setStarShipDetail: (starshipDetail:StarshipItem) => set ({starshipDetail}),
    starshipUrl:'',
    setStarshipUrl: (starshipUrl:string) => set({starshipUrl})
}));

export default useStarshipStore;
