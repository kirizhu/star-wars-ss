import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { StarshipState } from '../../store/starshipStore';
import searchBarStyle from './SearchBar.style';

const SearchBar = ({
    searchTerm,
    setSearchTerm,
    placeholder}: StarshipState) => {
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