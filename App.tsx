import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Flatlist from './components/Flatlist';
import ElevatedCard from './components/ElevatedCard';
import ImagesCard from './components/ImagesCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatlist />
        <ElevatedCard />
        <ImagesCard />
        <ImagesCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
