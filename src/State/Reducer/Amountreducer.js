let init = {
  amount: 5000,
  transactions: [{ amount: 5000, type: 'Initial', date: Date.now() }],
};

const reducer = (State = init, action) => {
  if (action.type === 'deposit') {
    let obj = {
      amount: action.payload,
      type: 'deposit',
      date: Date.now(),
    };
    return {
      amount: State.amount + action.payload,
      transactions: [...State.transactions, obj],
    };
  } else if (action.type === 'withdraw') {
    let obj = {
      amount: action.payload,
      type: 'withdraw',
      date: Date.now(),
    };
    return {
      amount: State.amount - action.payload,
      transactions: [...State.transactions, obj],
    };
  } else {
    let obj = {
      amount: 5000,
      type: 'initial',
      date: Date.now(),
    };
    return State;
    transactions: [...State.transactions, obj];
  }
};
export default reducer;
