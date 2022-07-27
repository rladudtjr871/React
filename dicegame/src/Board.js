

import Dice from './Dice';

function Board({name, color, gameHistory}) { 

    const num = gameHistory[gameHistory.length -1] || 1;
    const sum = gameHistory.reduce((a, b) => a + b, 0);

    return (
            
            <div class="Board App-board">
                <h2 class="Board-heading">{name}</h2>
                <Dice color={color} num={num}/> 
                <h2 class="Board-heading">기록</h2>
                <p>{gameHistory.join(', ')}</p>
                <h2 class="Board-heading">총점</h2>
                <p>{sum}</p>
            </div>            
        );
}
// React에서는 컴포넌트에 준 속성을 props라고 부른다.
// Dice에 color 속성을 주면 개발자도구에서 Components에서 확인하면 볼 수 있다.

//join메소드는 argument로 전달한 값을 배열의 각 요소들 사이사이에 넣어 하나의 문자열로 만들어준다.
export default Board;