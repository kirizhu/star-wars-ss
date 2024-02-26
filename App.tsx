import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import StarshipDetailModal from './src/components/StarshipDetailModal/StarshipDetailModal.component';
import Colors from './src/utils/Colors';
import StarshipList from './src/components/StarshipList/StarshipList.component';

export default function App() {

  return (
    <SafeAreaView testID='app-container' style={styles.container}>
      <StatusBar style="auto" />
      <StarshipList />
      <StarshipDetailModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.saberSilver,
  },
});
