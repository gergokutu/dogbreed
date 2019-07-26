export const SEND_GOOD_ANSWER2 = 'SEND_GOOD_ANSWER2'

export function sendGoodAnswer2(goodAnswer) {
  return {
    type: SEND_GOOD_ANSWER2,
    payload: goodAnswer
  }
}