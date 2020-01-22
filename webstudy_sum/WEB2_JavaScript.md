##### script 태그: HTML 파일 안에서 script태그 안에 java script내용이 들어간다.
```
<script> <!--script안에는 java script-->
  document.write(1+1);
</script>
```
<br/>

```
<input type="button" value="hi" onclick="alert('hi')">
<input type="text" onchange="alert('changed')">
<input type="text" onkeydown="alert('key down!')">
```

##### 해당 코드 실행 결과: https://opentutorials.org/course/3085/18782
##### 버튼 만들때
input 태그
value: 버튼에 적히는 내용
onclick: 경고창 뜨게 하고 싶을 때 alert값을 준다

##### event
  웹 브라우저에서 일어나는 일들<br/>
  이 중 기념할 만한 것들을 따로 정의하는데 onclock, onchange, onkeydown 같은 것들이 event다.<br/>
  event의 속성값으로는 javaScript가 들어간다.<br/>
  ex)
  onclick: 클릭할 때              <br/>
  onchange: 뭔가를 입력할 때      <br/>
  onkeydown: key 하나라도 적을 때 <br/>
  
#### console
f12 > console <br/>
파일 만들지 않고도 JavsScrpit 실행 가능 <br/>

#### 변수
var (변수이름) = (변수값);
<br/>

#### 제어할 태그 선택하기
우리가 하고 싶은 것: night button 눌렀을 때 body의 style이 변하는 것! <br/>
-> 결국 우리는 body 태그를 제어하고 싶은 것! <br/>
하는 방법: <br/>
1. 클릭했을 때 변하게 하고 싶은 거기 때문에 onclick 속성을 사용한다. <br/>
2. 속성값으로는 JavaScript 내용이 와야한다. document.querySelector('body')를 통해서 body 태그를 선택한다. <br/>
만약에 id나 class로 선택하고 싶으면 '#tag'랑 '.class'같은 형식으로 'body'를 대체해주면 된다.
3. <pre><code>{.style.backgroundColor = 'black';}</code></pre> 형태로 CSS 속성들을 추가해준다.

```
  <input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
  ">
  ```
  
  
  
