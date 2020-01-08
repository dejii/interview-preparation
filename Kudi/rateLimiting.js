function canPerformTransaction1(userId, transaction) {
  let map = new Map();

  if (!map.has(userId)) {
    // user hasn't performed any transaction
    map.set(userId, [transaction]);
    return true;
  } else {
    let userTransactions = map.get(userId);
    if (userTransactions.length < 5) {
      userTransactions.push(transaction);
      map.set(userId, userTransactions);
      return true;
    }
    // get the index of 1st transaction in a window of 5
    let idx = userTransactions.length - 5;
    let firstTransactionInWindow = userTransactions[idx];

    let currentTime = new Date().getMilliseconds();
    let diff = Math.floor(
      (currentTime - firstTransactionInWindow.createdAt) / 60000
    );
    if (diff < 60) {
      return false;
    } else {
      userTransactions.push(transaction);
      map.set(userId, userTransactions);
      return true;
    }
  }
}
