export const SEND_GOOD_ANSWER = 'SEND_GOOD_ANSWER'

export function sendGoodsAnswer(goodAnswer) {
  return {
    type: SEND_GOOD_ANSWER,
    payload: goodAnswer
  }
}