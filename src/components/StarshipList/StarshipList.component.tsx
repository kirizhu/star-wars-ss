import { View, Text, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, {useRef, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar.component'
import starshipListStyle from './StarshipList.style'
import { Starship, useFetchAllStarships } from '../../api/starships-api'
import Colors from '../../utils/Colors'
import ErrorComponent from '../Error/Error.component'
import StarshipItem from '../StarshipItem/StarshipItem.component'

const StarshipList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {starships, loading, error, fetchStarships, refreshStarships} = useFetchAllStarships()
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef<FlatList<Starship>>(null);
  const [showGoToTop, setShowGoToTop] = useState(false);

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowGoToTop(y > 200); 
  };

  const handleRefresh = () => {
    setRefreshing(true);
    refreshStarships();
    setRefreshing(false);
  };

  if (error) {
    return <ErrorComponent onPress={fetchStarships}/>
  }

  return (
    <View style={starshipListStyle.container}>
      <SearchBar placeholder='Search for starships' searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <FlatList
        ref={flatListRef}
        onScroll={handleScroll}
        style={starshipListStyle.list}
        data={starships.filter(starship => starship.name.toLowerCase().includes(searchTerm.toLowerCase()))}
        renderItem={({ item }) => <StarshipItem starship={item} />}
        keyExtractor={item => item.url}
        onEndReached={fetchStarships}
        onEndReachedThreshold={0.8}
        ListFooterComponent={
          loading &&  ( 
            <ActivityIndicator size="large" color={Colors.endorGreen} style={{ marginVertical: 50, justifyContent: 'center' }}/>
          )
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[Colors.endorGreen]} 
          />
        }
      /> 
      {showGoToTop && (
        <TouchableOpacity 
          onPress={scrollToTop} 
          style={styles.goToTopButton}
        >
          <Text style={styles.buttonText}>Go to Top</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  goToTopButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default StarshipList