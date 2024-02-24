import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import SearchBar from './src/components/SearchBar/SearchBar.component';
import useStarshipStore, { StarshipState } from './src/store/starshipStore';
import Colors from './src/utils/Colors';

export default function App() {
  const state = useStarshipStore()
  return (
    <SafeAreaView testID='app-container' style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar {...state as StarshipState} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.saberSilver,
  },
});
