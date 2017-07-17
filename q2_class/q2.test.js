/*
아래에 Double 이라는 클래스가 있습니다.
이 테스트를 통과하도록 Double을 구현하세요.
*/
class Double {

}

const doubleOfTwo = new Double(2);
const doubleOfThree = new Double(3);

describe('Q2_Double', () => test('Answer', () => {
  expect(doubleOfTwo.getValue()).toBe(4);
  expect(doubleOfThree.getValue()).toBe(6);
}))
