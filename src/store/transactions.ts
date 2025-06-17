import { create } from 'zustand';
import { Transaction, TransactionList } from '../types/transaction';

interface TransactionState {
  transactions: TransactionList;
  fetchTransactions: () => Promise<void>;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  fetchTransactions: async () => {
    // Mock API call
    const mockResponse = {
      data: [
        {
          refId: "123456",
          date: "2024-10-19T12:34:56",
          recipientName: "John Duel",
          description: "Salary Payment",
          amount: 1080.00
        },
        {
          refId: "456567",
          date: "2024-09-21T09:12:45",
          recipientName: "Jane Smith",
          description: "Tomicka Payment",
          amount: 2080.75
        },
        {
          refId: "759647",
          date: "2024-10-05T16:18:28",
          recipientName: "Robert Brown",
          description: "Refund",
          amount: -100.00
        },
        {
          refId: "103104",
          date: "2024-08-30T11:47:22",
          recipientName: "Emily Davis",
          description: "Emma Payments",
          amount: 1080.00
        }
      ]
    };
    
    set({ transactions: mockResponse.data });
  },
}));