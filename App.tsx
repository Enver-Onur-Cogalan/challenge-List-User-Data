import React from 'react';
import { SafeAreaView } from 'react-native';
import UsersAxios from './screen/component/UsersAxios';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsersAxios />
    </SafeAreaView>
  );
}
