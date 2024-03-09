import React from 'react';
import { SafeAreaView } from "react-native";
import Componentes, { MyCode, MyName } from './Componentes';

export default () => (
    <SafeAreaView style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
      <MyCode/>
      <MyName nome="Fernandes" idade={45}/>
      <Componentes/>
    </SafeAreaView>
)
