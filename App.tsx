import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Flatlist from './components/Flatlist';
import ElevatedCard from './components/ElevatedCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatlist />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
