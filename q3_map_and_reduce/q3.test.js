/*
이번 문제에서는 그 동안 많이 언급했단 map과 reduce 함수를 다룹니다.
map은 Array를 다루는 데 가장 중요한 함수입니다.
reduce는 map 보다는 살짝 복잡해서 이해하기 어렵지만 역시나 중요한 함수이므로
개념을 잘 이해해 두는 것이 필요합니다.
*/

// 어떤 게임의 유저 데이터베이스에는 아래와 같은 플레이어들이 있다고 합니다.
const players = [
  { name: '민수도적', type: '도적', level: 32 },
  { name: '해운대전사', type: '전사', level: 70 },
  { name: '강아지와나', type: '전사', level: 12 },
  { name: '자연의힘내게로', type: '드루이드', level: 70 },
  { name: '해운대힐러', type: '사제', level: 9 },
];

describe('Q4_map_and_reduce', () => test('Answer', () => {

  // 1번 문제.
  // 참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const playerNames = players.map(player => {
    /* 여기에 map 에 전달되는 함수를 구현하세요. */
  });
  expect(playerNames).toEqual( // 실행한 결과가 아래와 같은지 비교합니다.
    ['민수도적', '해운대전사', '강아지와나', '자연의힘내게로', '해운대힐러']
  );


  // 2번 문제
  // 참고: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const usersPerType = players.reduce((result, player) => {
    /* 여기에 reduce 에 전달되는 함수를 구현하세요 */
  }, {});
  expect(usersPerType).toEqual(
    {
      도적: 1,
      전사: 2,
      드루이드: 1,
      사제: 1,
    }
  )
}));