// 여기에 'FOO' 와 'BAR' 문자열을 임포트하세요
// 또한 아래의 bazString을 실제로 임포트할 수 있도록 올바른 위치에 파일을 만드세요.
import { bazString } from './baz/bazFile';
import { fooString } from './foo';
import barString from './bar'

const result = fooString+barString+bazString;

const expectedResult = 'FOOBARBAZ';

// 아래의 함수가 위의 값이 서로 같은지를 비교하고 다르다면 테스트를 실패시킵니다.
describe('Q1_Modules', () => test('Answer', () => {
  expect(result).toBe(expectedResult);
}));
