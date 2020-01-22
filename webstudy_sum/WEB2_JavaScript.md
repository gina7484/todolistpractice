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
  
  
  
