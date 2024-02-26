import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StarshipItem } from '../../model/starshipModels';
import useStarshipStore from '../../store/starshipStore';
import starshipListItemStyle from './StarshipListItem.style';

interface StarshipListItemProps {
  starship: StarshipItem;
}
const StarshipListItem:React.FC<StarshipListItemProps> = ({starship}) => {

  const {setShowModal, setStarshipUrl} = useStarshipStore(); 

  const handleOnPress = async ()=>{
    setStarshipUrl(starship.url)
    setShowModal(true)
  }

  return (
    <TouchableOpacity 
      accessibilityLabel="Öppna detaljvy"
      accessibilityRole="button"
      style={starshipListItemStyle.container} onPress={handleOnPress}
    >
      <Text style={starshipListItemStyle.title}>{starship.name}</Text>
      <Text>Model: {starship.model}</Text>
      <Text>Manufacturer: {starship.manufacturer}</Text>
      <Text>Cost in credits: {starship.cost_in_credits}</Text>
      <Text>Length: {starship.length} meters</Text>
      <Text>Max speed (atmosphere): {starship.max_atmosphering_speed}</Text>
    </TouchableOpacity>

  );
};



export default StarshipListItem;
