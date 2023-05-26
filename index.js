// const userNum = prompt("369369369369:");
// const nums = parseInt(userNum);
// for(let i = 1; i <= nums; i ++){
//     TSN(i);
// }

// const userNum = prompt('Enter how many times for fizzbuzz number: ')
// const nums = parseInt(userNum);
// for(let i = 1; i <= nums; i++){
//     FizzBuzz(i);
// }
const FizzBuzz = (num) =>{
    if(num % 3 === 0 && num % 5 === 0){
        return "FIZZ BUZZ!!"
    }else if(num % 5 === 0){
        return "BUZZ!"
    }else if(num % 3 === 0){
        return "FIZZ!"
    } else {
        return num
    }
    
}

const TSN = (num) => {
    let problem = String(num)
    if(problem.includes(3) || problem.includes(6) || problem.includes(9)){
        return 'clap!'
    } else {
        return problem;
    }
}

const numbers = document.querySelector('input'); //유저가 숫자를 입력하는 곳
const numBtn = document.querySelector('button'); //숫자 전송버튼
const view = document.querySelector('.container'); //게임 화면


/**  
 * tsn을 누르면 369가 시작되고
 * fizzbuzz를 누르면 fizzbuzz가 실행된다
 * 
 * 1. 각 게임모드 버튼을 눌렀을 때 실행하는 함수를 만든다
 * 2. 버튼이 활성화 되면 중복 방지를 위해 게임모드를 빈 문자열로 초기화 한다
 * 3. 이벤트 핸들러가 중복되므로 `removeEventListener()`메서드를 이용한다.
*/


//게임모드 버튼
const tsn = document.querySelector('.tsn'); 
const fizzbuzz = document.querySelector('.fizzbuzz');

//각 게임모드 함수
const TSNclick = (evt) =>{
    evt.preventDefault();
    const userNum = parseInt(numbers.value);
    for(let i = 1; i <= userNum; i++){
        view.innerHTML = `${TSN(i)}<br>`;
    }

}

const BFclick = (evt) =>{
    evt.preventDefault();
    const userNum = parseInt(numbers.value);
    for(let i = 1; i <= userNum; i++){
        view.innerHTML = `${FizzBuzz(i)}<br>`
    }
}


//게임모드 텍스트 전환
const header = document.querySelector('.header');
let gamemode = "";
if(gamemode === ''){
    header.innerHTML = "Select a Game Mode"
}

//모드 변경 클릭핸들러
tsn.addEventListener('click',()=>{
    gamemode = "tsn";
    if(gamemode==='tsn'){
        numBtn.removeEventListener('click',BFclick)
        numBtn.addEventListener('click',TSNclick);
    }
    header.innerHTML = "369"
})

fizzbuzz.addEventListener('click',()=>{
    gamemode = "fizzbuzz";
    if(gamemode==='fizzbuzz'){
        numBtn.removeEventListener('click',TSNclick)
        numBtn.addEventListener('click',BFclick);
    }
    header.innerHTML = "FizzBuzz"
})

