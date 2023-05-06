import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/containers/Home';
import Header from './src/components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D4949',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
