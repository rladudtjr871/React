//import 변수명 from 파일위치;
import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';


const DICE_IMAGES = {
    blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
    red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06],
};



//이미지 태그의 src 속성으로 적용
function Dice({color = "blue", num = 1}) {
    //console.log(props);
    // const diceImg = props.color === 'red' ? diceRed01 : diceBlue01;
    // return <img src={diceImg} alt="주사위" />;    

    const src = DICE_IMAGES[color][num - 1];
    const alt = `${color} ${num}`;
    return <img class="Dice" src={src} alt={alt} />;

}

//기본값은 Dice메소드
export default Dice;



//src 속성에 이미지 경로를 직접 넣으면 결과화면에서 이미지가 잘 불러와지지 않는다.
// > import 방식으로 변수에 넣어 쓰도록