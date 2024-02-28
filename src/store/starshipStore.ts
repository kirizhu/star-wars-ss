import {create} from 'zustand'
import { StarshipItem } from '../model/starshipModels';

export interface StarshipState {
    searchTerm: string;
    setSearchTerm: (searchTerm: string) => void;
    showModal: boolean;
    setShowModal: (showModal:boolean) => void;
    closeModal: () => void;
    starshipDetail: StarshipItem|null;
    setStarShipDetail: (starshipDetail:StarshipItem) => void;
    starshipUrl:string;
    setStarshipUrl:(starshipUrl:string) => void;
}

const useStarshipStore = create<StarshipState>((set) => ({
    searchTerm: '',
    setSearchTerm: (searchTerm: string) => set({ searchTerm }),
    showModal: false,
    closeModal: () => set({showModal:false}),
    setShowModal: (showModal:boolean) => set({showModal}),
    starshipDetail:null,
    setStarShipDetail: (starshipDetail:StarshipItem) => set ({starshipDetail}),
    starshipUrl:'',
    setStarshipUrl: (starshipUrl:string) => set({starshipUrl})
}));

export default useStarshipStore;
