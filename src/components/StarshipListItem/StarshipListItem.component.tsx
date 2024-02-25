import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useFetchStarshipById } from '../../api/starships-api';
import useStarshipStore from '../../store/starshipStore';
import { StarshipItem } from '../../model/starshipModels';
import starshipListItemStyle from './StarshipListItem.style';

interface StarshipListItemProps {
  starship: StarshipItem;
}
const StarshipListItem:React.FC<StarshipListItemProps> = ({starship}) => {

  const {fetchStarship} = useFetchStarshipById()
  const {setShowModal} = useStarshipStore(); 

  const handleOnPress = async ()=>{
    await fetchStarship(starship.url)
    setShowModal(true)
  }

  return (
    <TouchableOpacity style={starshipListItemStyle.container} onPress={handleOnPress}>
      <Text style={starshipListItemStyle.title}>{starship.name}</Text>
      <Text>Model: {starship.model}</Text>
      <Text>Manufacturer: {starship.manufacturer}</Text>
      <Text>Cost in credits: {starship.cost_in_credits}</Text>
      <Text>Length: {starship.length} meters</Text>
      <Text>Max speed (atmosphere): {starship.max_atmosphering_speed}</Text>
      <Text>Crew: {starship.crew}</Text>
      <Text>Passengers: {starship.passengers}</Text>
    </TouchableOpacity>
  );
};



export default StarshipListItem;
