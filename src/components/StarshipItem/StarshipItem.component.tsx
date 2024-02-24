import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StarshipItem = ({ starship }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{starship.name}</Text>
      <Text>Model: {starship.model}</Text>
      <Text>Manufacturer: {starship.manufacturer}</Text>
      <Text>Cost in credits: {starship.cost_in_credits}</Text>
      <Text>Length: {starship.length} meters</Text>
      <Text>Max speed (atmosphere): {starship.max_atmosphering_speed}</Text>
      <Text>Crew: {starship.crew}</Text>
      <Text>Passengers: {starship.passengers}</Text>
    </View>
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

export default StarshipItem;
