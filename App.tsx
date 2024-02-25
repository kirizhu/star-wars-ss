import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import StarshipList from './src/components/StarshipList/StarshipList.component';
import StarshipDetailModal from './src/components/StarshipDetailModal/StarshipDetailModal.component';
import Colors from './src/utils/Colors';

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
