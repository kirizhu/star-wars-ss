import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
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
    <SafeAreaProvider>
    <SafeAreaView testID='app-container' style={styles.container}>
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
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:16,
    backgroundColor: Colors.deathStarSilver,
  },
});
