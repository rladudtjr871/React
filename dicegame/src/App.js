import{ useState } from 'react';
import Button from './Button';
import Board from './Board';
import './App.css';
import logo from './assets/logo.png';


//랜덤한 수를 뽑는 함수
function random(n) {
    return Math.ceil(Math.random() * n);
}



//기본적으로 1로 시작 > 던지기 클릭시 랜덤한 수로 setNum 설정
function App() {
        //State는 React에서 화면을 전환할 때 사용한다. > React에서는 State가 변경될 때마다 화면을 새로 랜더링
        //나        
        const [myHistory, setMyHistory] = useState([]);        

        //상대       
        const [otherHistory, setOtherHistory] = useState([]);


        const handleRollclick = () => {
            const nextMyNum = random(6);
            const nextOtherNum = random(6);

            setMyHistory([...myHistory, nextMyNum]);
            setOtherHistory([...otherHistory, nextOtherNum]);
        };
    
        const handleClearClick = () => {
            setMyHistory([]);
            setOtherHistory([]);
        }



        return (
            <div className="App">
                <img class="App-logo" src={logo} alt="주사위게임 로고" />
                <h1 class="App-title">주사위게임</h1>
                <div>
                    <Button className='App-button' color="blue" onClick={handleRollclick}>던지기</Button>
                    <Button className='App-button' color="red" onClick={handleClearClick}>처음부터</Button>
                </div>       
                <div class="App-boards">
                    <Board name="나" color="blue" gameHistory={myHistory}/>
                    <Board name="상대" color="red" gameHistory={otherHistory}/>
                </div>         
            </div>            
        );
}
// React에서는 컴포넌트에 준 속성을 props라고 부른다.
// Dice에 color 속성을 주면 개발자도구에서 Components에서 확인하면 볼 수 있다.

//join메소드는 argument로 전달한 값을 배열의 각 요소들 사이사이에 넣어 하나의 문자열로 만들어준다.
export default App;