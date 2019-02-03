import gql from 'graphql-tag';

export const getTransactionDataQuery = () => gql`
  query GetTransactionData($month: Int!, $year: Int!) {
    transactions(transactionType: BOTH, month: $month, year: $year) {
      id
      type
      amount
      date
      description
      category {
        name
      }
    }
    categories {
      id
      name
    }
    incomeTotals: totals(month: $month, year: $year, transactionType: INCOME) {
      total
      categoryTotals(month: $month, year: $year, transactionType: INCOME) {
        name
        total
      }
    }
    expenseTotals: totals(
      month: $month
      year: $year
      transactionType: EXPENSE
    ) {
      total
      categoryTotals(month: $month, year: $year, transactionType: EXPENSE) {
        name
        total
      }
    }
  }
`;

export const createTransaction = () => gql`
  mutation CreateTransaction($transaction: TransactionInput!) {
    createTransaction(transaction: $transaction) {
      id
      date
      description
      type
      category {
        name
      }
    }
  }
`;
