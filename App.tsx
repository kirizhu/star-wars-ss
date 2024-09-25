import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';
import StarshipDetailModal from './src/components/StarshipDetailModal/StarshipDetailModal.component';
import Colors from './src/utils/Colors';
import StarshipList from './src/components/StarshipList/StarshipList.component';
import useStarshipStore from './src/store/starshipStore';
import { useFetchAllStarships } from './src/api/starships-api';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const { loadMoreStarships, refreshStarships, fetchStarship, starships, loading, error} = useFetchAllStarships();
  const {showModal, closeModal} = useStarshipStore();
  return (
    <SafeAreaProvider testID='app-container'>
    <SafeAreaView style={styles.container}>
      <ImageBackground
                    source={require("./assets/stormtrooper-star-wars-czquhdmgnk5wk2sv.jpg")}
                    style={{flex:1}}
      >
      <StatusBar style="auto" />
      <StarshipList 
        error={error} 
        loading={loading}
        loadMoreStarships={loadMoreStarships}
        refreshStarships={refreshStarships}
        starships={starships}
      />
      <StarshipDetailModal 
        showModal={showModal} 
        closeModal={closeModal}
        fetchStarship={fetchStarship}
        error={error} 
        loading={loading}
      />
      </ImageBackground>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.deathStarSilver,
  },
});
