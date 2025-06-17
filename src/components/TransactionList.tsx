import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Transaction } from '../types/transaction';
import { TransactionItem } from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  onTransactionPress: (transaction: Transaction) => void;
}

export const TransactionList: React.FC<TransactionListProps> = ({ 
  transactions, 
  onTransactionPress 
}) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.refId}
      renderItem={({ item }) => (
        <TransactionItem 
          transaction={item} 
          onPress={() => onTransactionPress(item)} 
        />
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 16,
  },
});