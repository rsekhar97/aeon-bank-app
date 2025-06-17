import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Transaction } from '../types/transaction';
import { formatDate } from '../utils/formatDate';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: () => void;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({ transaction, onPress }) => {
  const amountColor = transaction.amount >= 0 ? styles.positiveAmount : styles.negativeAmount;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.date}>{formatDate(transaction.date)}</Text>
      </View>
      <Text style={[styles.amount, amountColor]}>
        {transaction.amount >= 0 ? '+' : ''}
        {transaction.amount.toFixed(2)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  positiveAmount: {
    color: '#2ecc71',
  },
  negativeAmount: {
    color: '#e74c3c',
  },
});