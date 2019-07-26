export const SEND_WRONG_ANSWER1 = 'SEND_WRONG_ANSWER1'

export function sendWrongAnswer1(wrongAnswer) {
  return {
    type: SEND_WRONG_ANSWER1,
    payload: wrongAnswer
  }
}