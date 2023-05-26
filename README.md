# gameConverter
버튼을 눌러서 게임변경하는 클릭 이벤트 핸들러를 구현해봄

게임 1: 369게임

게임 2: Fizzbuzz



게임모드 변경버튼을 누르고 `send`버튼을 눌렀을 때 그에 맞게 게임이 진행되게 했음

모드변경 기능을 만들때 처음엔
```
tsn.addEventListener('click',(evt)=>{
  evt.preventDefault();
  numbtn.addEventListener()
  ...
})
```

이런식으로 진행했었는데 이벤트가 중복되는것을 알게되었음

그러다가 `removeEventListener()`메서드를 알게 됨

`send`버튼을 누를때 마다 클릭핸들러가 중복이 되므로 새로 알게된 메서드를 이용해서

클릭할때 마다 `send`버튼에 대한 이벤트 핸들러를 초기화하는 방식을 고안해냄

결과적으로 현재의 방식인 `send`버튼을 누를때 마다 `removeEventListener()`메서드로 먼저 초기화 하고

게임모드 이벤트를 `addEventListener()`메서드로 이벤트 핸들러를 지정함


이번 프로젝드의 중요한 부분은 아무래도 클릭으로 모드변경을 구현해낸것이라고 생각함
```
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
```
