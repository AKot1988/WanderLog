export const fakeRequest = (
  timeResolved_MS: number,
  timoutRejected_MS: number
) => {
  if (
    typeof timeResolved_MS !== 'number' ||
    typeof timoutRejected_MS !== 'number' ||
    timeResolved_MS < 0 ||
    timeResolved_MS > 5000 ||
    timoutRejected_MS < 0 ||
    timoutRejected_MS > 5000
  ) {
    throw new Error('timeMS should be number between 0 and 5000');
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('timoutResolved'), timeResolved_MS);
      setTimeout(() => reject('error: ' + 'timoutRejected'), timoutRejected_MS);
    })
  }
};
