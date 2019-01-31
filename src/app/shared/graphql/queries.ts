import gql from 'graphql-tag';

export const getTransactionsQuery = () => gql`
  {
    monthlyExpenses: transactions(
      transactionType: EXPENSE
      month: 1
      year: 2019
    ) {
      id
      amount
      date
      description
      category {
        name
      }
    }
    monthlyIncomes: transactions(
      transactionType: INCOME
      month: 1
      year: 2019
    ) {
      id
      amount
      date
      description
      category {
        name
      }
    }
    annualExpenses: transactions(transactionType: EXPENSE, year: 2019) {
      id
      amount
      date
      description
      category {
        name
      }
    }
    annualIncomes: transactions(transactionType: INCOME, year: 2019) {
      id
      amount
      date
      description
      category {
        name
      }
    }
  }
`;
