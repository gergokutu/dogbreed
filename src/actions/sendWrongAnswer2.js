export const SEND_WRONG_ANSWER2 = 'SEND_WRONG_ANSWER2'

export function sendWrongAnswer2(wrongAnswer) {
  return {
    type: SEND_WRONG_ANSWER2,
    payload: wrongAnswer
  }
}