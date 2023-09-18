import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Flatlist from './components/Flatlist';
import ElevatedCard from './components/ElevatedCard';
import ImagesCard from './components/ImagesCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatlist />
        <ElevatedCard />
        <ImagesCard />
        <ImagesCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
