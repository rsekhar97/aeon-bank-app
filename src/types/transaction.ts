export interface Transaction {
    refId: string;
    date: string;
    recipientName: string;
    description: string;
    amount: number;
  }
  
  export type TransactionList = Transaction[];