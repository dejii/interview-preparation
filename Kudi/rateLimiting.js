/**
 *
 */

function canPerformTransaction(userId, transaction) {
  let map = new Map();

  if (!map.has(userId)) {
    // user hasn't performed any transaction, create the userId key and add the transaction.
    map.set(userId, [transaction]);
    return true;
  } else {
    let userTransactionsQueue = map.get(userId);
    let currentTime = new Date().getMilliseconds();
    // remove transactions later than an hour from the queue
    while (userTransactionsQueue.length > 0) {
      let firstTransactionInQueue = userTransactionsQueue[0];
      let diff = Math.floor(
        (currentTime - firstTransactionInQueue.createdAt) / 60000
      );
      if (diff <= 60) {
        break;
      } else {
        userTransactionsQueue.shift(); // pop from front of queue
      }
    }
    if (userTransactionsQueue.length < 5) {
      userTransactionsQueue.push(transaction);
      map.set(userId, userTransactionsQueue);
      return true;
    } else {
      // user still has 5 transactions in the last hour
      return false;
    }
  }
}
