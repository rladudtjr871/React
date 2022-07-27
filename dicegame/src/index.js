import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';




const product = 'MacBook';
const model = ' Air';
const item = product + model;
const imageUrl = 'https://s.pstatic.net/static/newsstand/2022/0725/article_img/new_main/9016/192445_001.jpg'

//const element = <h1>안녕 리액트!</h1>;

function handleClick() {
  alert('곧 도착합니다!');
}

//console.log(element);

//6.
//React 컴포넌트란? > 함수이름 첫글자가 대문자고, JS문법으로 만든 React Element를 반환해야한다.
function Hello() {
  return <h1>안녕 리액트!</h1>;
}

const element = (
  <>
    <Hello />
    <Hello />
    <Hello />
  </>
);
/////////////////////////




const root = ReactDOM.createRoot(document.getElementById('root')); //root라는 id의 html의 요소
// render > 화면에 그린다
root.render(

  //1.
  //<p className="hello">안녕 리액트!</p> // h1 태그를 root에 넣는다.

  //2.
  // <form>
  //   <label htmlFor='name'>이름</label>
  //   <input id='name' type="text" />
  // </form>

  //3.
  // <Fragment>
  //   <p>안녕</p>
  //   <p>리액트!</p>
  // </Fragment>

  //4. 8강
  // <>
  //   <h1 id='title'>가위바위보</h1>
  //   <button className='hand'>가위</button>
  //   <button className='hand'>바위</button>
  //   <button className='hand'>보</button>
  // </>

  //5.
  // <>
  // <h1>나만의 {product.toLocaleUpperCase() + model} 주문하기</h1>
  // <img src={imageUrl} alt='제품사진' />
  // <button onClick={handleClick}>확인</button>
  // </>

  //6.
  //element


  <App />


);


//1. 브라우저가 실행되면 index.js 파일이 열린다.
//2. ReactDOM > render 는 h1태그를 만들고
//3. 만든 요소를 id가 root인 요소에 자식으로 넣는다.


//4. JavaScript에는 기본적으로 Class의 개념이 있기때문에 html의 class를 그대로 사용할 수 없다.
//   따라서 'ClassName'이라는 이름으로 class속성을 줄 수 있다.

//5. JavaScript에는 for도 예약어기때문에 html의 for를 'htmlFor' 라는 이름으로 사용해야한다.

//6. 케멀표기법을 써야한다.

//7. JSX 요소를 하나의 태그로 감싸져있어야한다.
//    > <Fragment></Fragment> 태그를 활용하여 불필요한 코드를 줄이고 하나로 묶을 수 있다.
//    > <> </> 이름없는 태그로도 사용

//8. {} 안에는 변수뿐 아니라 JavaScript 표현식은 모두 사용이 가능하다.
//    > (단,  ''는 제외 & 표현식만 가능하다(if, for 같은 JavaScript 문장은 사용불가))




//컴포넌트 사용시 장점
//1. 구성에 따라 코드를 세분화 할 수 있다.
//2. 재사용이 용이함.