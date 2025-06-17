import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { formatDate } from '../utils/formatDate';

type TransactionDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'TransactionDetail'>;
};

export const TransactionDetailScreen: React.FC<TransactionDetailScreenProps> = ({ route }) => {
  const { transaction } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Transaction Details:
Reference ID: ${transaction.refId}
Date: ${formatDate(transaction.date)}
Recipient: ${transaction.recipientName}
Description: ${transaction.description}
Amount: ${transaction.amount >= 0 ? '+' : ''}${transaction.amount.toFixed(2)}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Transaction Details</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Reference ID:</Text>
          <Text style={styles.detailValue}>{transaction.refId}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date:</Text>
          <Text style={styles.detailValue}>{formatDate(transaction.date)}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Recipient:</Text>
          <Text style={styles.detailValue}>{transaction.recipientName}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Description:</Text>
          <Text style={styles.detailValue}>{transaction.description}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Amount:</Text>
          <Text style={[
            styles.detailValue, 
            styles.amount,
            transaction.amount >= 0 ? styles.positiveAmount : styles.negativeAmount
          ]}>
            {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
          </Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
        <Text style={styles.shareButtonText}>Share Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  detailContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 18,
  },
  positiveAmount: {
    color: '#2ecc71',
  },
  negativeAmount: {
    color: '#e74c3c',
  },
  shareButton: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});