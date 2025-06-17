import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { useTransactionStore } from '../store/transactions';
import { TransactionList } from '../components/TransactionList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type TransactionListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TransactionList'>;
};

export const TransactionListScreen: React.FC<TransactionListScreenProps> = ({ navigation }) => {
  const { transactions, fetchTransactions } = useTransactionStore();
  
  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleTransactionPress = (transaction: any) => {
    navigation.navigate('TransactionDetail', { transaction });
  };

  if (transactions.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Transactions</Text>
      <TransactionList 
        transactions={transactions} 
        onTransactionPress={handleTransactionPress} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});