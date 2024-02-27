import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import StarshipDetailModal from './src/components/StarshipDetailModal/StarshipDetailModal.component';
import Colors from './src/utils/Colors';
import StarshipList from './src/components/StarshipList/StarshipList.component';
import useStarshipStore from './src/store/starshipStore';
import { useFetchAllStarships } from './src/api/starships-api';

export default function App() {
  const {showModal,closeModal} = useStarshipStore();
  const {loading, error} = useFetchAllStarships();
  return (
    <SafeAreaView testID='app-container' style={styles.container}>
      <StatusBar style="auto" />
      <StarshipList 
        error={error} 
        loading={loading} 
      />
      <StarshipDetailModal 
        showModal={showModal} 
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.deathStarSilver,
  },
});
