import React, {useRef, useState} from 'react'
import { View, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { StarshipItem } from '../../model/starshipModels'
import SearchBar from '../SearchBar/SearchBar.component'
import ErrorComponent from '../Error/Error.component'
import Fab from '../Fab/Fab.component'
import Loading from '../Loading/Loading.component'
import Refresh from '../Refresh/Refresh.component'
import StarshipListItem from '../StarshipListItem/StarshipListItem.component'
import starshipListStyle from './StarshipList.style'
import useStarshipStore from '../../store/starshipStore'

interface StarshipListProps {
  loading: boolean;
  error: Error | null;
  loadMoreStarships:() => void;
  starships: StarshipItem[];
  refreshStarships:() => void;
}
const StarshipList = ({loadMoreStarships, loading, error, starships, refreshStarships}:StarshipListProps) => {
  const {searchTerm, setSearchTerm} = useStarshipStore();
  const flatListRef = useRef<FlatList<StarshipItem>>(null);
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
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
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder='Search for starships'/>
      <FlatList
        testID='ship-list'
        accessibilityRole="list"
        accessibilityLabel="List of starships"
        accessibilityHint="scroll down to load more"
        ref={flatListRef}
        onScroll={handleScroll}
        style={starshipListStyle.list}
        data={starships}
        renderItem={({ item }) => <StarshipListItem starship={item} />}
        keyExtractor={item => item.url}
        onEndReached={loadMoreStarships}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<ErrorComponent />}
        ListFooterComponent={<Loading loading={loading}/>}
        refreshControl={<Refresh loading={loading} refreshFn={refreshStarships}/>}
      />
      <Fab showGoToTop={showGoToTop} scrollToTop={scrollToTop} />
    </View>
  )
}

export default StarshipList