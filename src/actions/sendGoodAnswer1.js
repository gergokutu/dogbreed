export const SEND_GOOD_ANSWER1 = 'SEND_GOOD_ANSWER1'

export function sendGoodAnswer1(goodAnswer) {
  return {
    type: SEND_GOOD_ANSWER1,
    payload: goodAnswer
  }
}