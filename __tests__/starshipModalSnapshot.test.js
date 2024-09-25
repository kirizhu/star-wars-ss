import React from 'react';
import renderer from 'react-test-renderer';
import StarshipListItem from '../src/components/StarshipListItem/StarshipListItem.component';

const mockStarship = 
  {
    name: 'X-wing',
    model: 'T-65 X-wing',
    manufacturer: 'Incom Corporation',
    cost_in_credits: '149999',
    length: '12.5',
    crew: '1',
    passengers: '0',
    cargo_capacity: '110',
    starship_class: 'Starfighter',
    url: 'https://swapi.dev/api/starships/12/'
  }


test('renders Starship correctly', () => {
  const tree = renderer.create(
    <StarshipListItem
        starship={mockStarship}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
