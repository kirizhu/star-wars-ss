import React from 'react';
import renderer from 'react-test-renderer';
import StarshipList from '../src/components/StarshipList/StarshipList.component';

const mockStarships = [
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
];

test('renders StarshipList correctly', () => {
  const tree = renderer.create(
    <StarshipList 
      starships={mockStarships} 
      loading={false} 
      error={null}
      loadMoreStarships={() => {}} 
      refreshStarships={() => {}} 
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
