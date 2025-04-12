import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#4CAF50" />
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default App;