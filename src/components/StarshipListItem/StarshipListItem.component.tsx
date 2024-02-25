import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFetchStarshipById } from '../../api/starships-api';
import useStarshipStore from '../../store/starshipStore';
import { StarshipItem } from '../../model/starshipModels';

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
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <Text style={styles.title}>{starship.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StarshipListItem;
