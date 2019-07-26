export const SEND_WRONG_ANSWER = 'SEND_WRONG_ANSWER'

export function sendWrongAnswer(wrongAnswer) {
  return {
    type: SEND_WRONG_ANSWER,
    payload: wrongAnswer
  }
}