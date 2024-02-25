import React from 'react'
import { View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import searchBarStyle from './SearchBar.style';
import useStarshipStore from '../../store/starshipStore';

const SearchBar = () => {
    const {searchTerm, setSearchTerm, placeholder} = useStarshipStore()
    return (
        <View style={searchBarStyle.container}>
            <FontAwesome 
                style={searchBarStyle.icon}
                name="search" 
                size={24} 
                color="black" 
            />
            <TextInput 
                style={searchBarStyle.input} 
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder={placeholder}
            />
        </View>
    )
}

export default SearchBar