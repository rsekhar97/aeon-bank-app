import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionListScreen } from './src/screens/TransactionListScreen';
import { TransactionDetailScreen } from './src/screens/TransactionDetailScreen';
import { Transaction } from './src/types/transaction';

export type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: Transaction };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionList">
        <Stack.Screen 
          name="TransactionList" 
          component={TransactionListScreen} 
          options={{ title: 'Transactions' }}
        />
        <Stack.Screen 
          name="TransactionDetail" 
          component={TransactionDetailScreen} 
          options={{ title: 'Transaction Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;