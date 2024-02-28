import React from 'react'
import { View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import searchBarStyle from './SearchBar.style';

interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: (searchTerm:string) => void;
    placeholder: string;
}
const SearchBar = ({searchTerm, setSearchTerm, placeholder}:SearchBarProps) => {
    
    return (
        <View style={searchBarStyle.container}>
            <FontAwesome 
                style={searchBarStyle.icon}
                name="search" 
                size={24} 
                color="black" 
            />
            <TextInput
                accessibilityLabel="Textinput"
                accessibilityHint='Look for starships'
                style={searchBarStyle.input} 
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder={placeholder}
            />
        </View>
    )
}

export default SearchBar