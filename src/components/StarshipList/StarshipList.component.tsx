import { View, Text, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, {useRef, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar.component'
import starshipListStyle from './StarshipList.style'
import { Starship, useFetchAllStarships } from '../../api/starships-api'
import Colors from '../../utils/Colors'
import ErrorComponent from '../Error/Error.component'
import StarshipItem from '../StarshipListItem/StarshipListItem.component'
import Fab from '../Fab/Fab.component'
import Loading from '../Loading/Loading.component'
import useStarshipStore from '../../store/starshipStore'
import Refresh from '../Refresh/Refresh.component'
import StarshipListItem from '../StarshipListItem/StarshipListItem.component'

const StarshipList = () => {
  const {starships, loading, error, loadMoreStarships, refreshStarships} = useFetchAllStarships()
  const flatListRef = useRef<FlatList<Starship>>(null);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowGoToTop(y > 200); 
  };

  if (error) {
    return <ErrorComponent onPress={refreshStarships}/>
  }

  return (
    <View style={starshipListStyle.container}>
      <SearchBar />
      <FlatList
        ref={flatListRef}
        onScroll={handleScroll}
        style={starshipListStyle.list}
        data={starships}
        renderItem={({ item }) => <StarshipListItem starship={item} />}
        keyExtractor={item => item.url}
        onEndReached={loadMoreStarships}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<ErrorComponent />}
        ListFooterComponent={loading && <Loading />}
        refreshControl={<Refresh refreshFn={refreshStarships}/>}
      /> 
      <Fab showGoToTop={showGoToTop} scrollToTop={scrollToTop} />
    </View>
  )
}



export default StarshipList