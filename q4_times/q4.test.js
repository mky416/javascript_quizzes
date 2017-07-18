/**
 * `times` 함수는 두 개의 인자를 받습니다.
 * `num`은 작업을 반복할 횟수입니다.
 * `action`은 `num`번 반복하는 작업이 정의된 함수입니다.
 *
 * 따라서 times 함수는 주어진 작업을 지정된 횟수만큼 반복 실행하는 함수입니다.
 * action을 실행할 때마다 현재가 몇 번째 반복인지를 인자로 넣어 호출해야 합니다.
 * 즉 처음 반복일 때는 0, 다음은 1, 2, 3... 이런 식입니다.
 *
 * 반환 값은 없습니다.
 */
const times = (num, action) => {
  // 여기에 구현해 보세요
  return;
};



// 아래에서는 이렇게 만든 times 함수를 사용하여
// 간단한 반복 작업을 실제로 실행하며 테스트를 해 봅니다.
describe('Q4_Times', () => test('Answer', () => {

  // 그냥 지정된 횟수만큼 1을 더하는 테스트입니다. 즉 5번 1을 더하도록 테스트합니다.
  let counter = 0;
  times(5, currentNumber => {
    counter = counter + 1;
  });
  expect(counter).toBe(1 + 1 + 1 + 1 + 1);

  // 이것은 매 반복 횟수를 더해 보는 테스트입니다.
  // 만약 함수가 5번 반복된다면 0 + 1 + 2 + 3 + 4 와 summation 값이 같아야 합니다.
  let summation = 0;
  times(5, currentNumber => {
    summation = summation + currentNumber;
  });
  expect(summation).toBe(0 + 1 + 2 + 3 + 4);

}));
