CSS 중급 내용 정리
=============
Cross Browse
-------------
#### Layout engine(렌더링 엔진)
  + 브라우저의 엔진이다. 브라우저를 실질적으로 렌더링해준다.
  + 다른 브라우저라도 같은 엔진을 사용한다면 거의 비슷하게 보여진다.
  + Cross Browsing할 때 각 브라우저들을 엔진 별로 확인하자
  + engine 종류
  
      <img src="http://webberstd.cdn1.cafe24.com/img/css-2/cross-engine.png" width="340px" height="400px" title="브라우저의 엔진 도표" alt="브라우저의 엔진 도표"></img><br/>
      
#### CSS 초기화
   * concept
      - 브라우저가 자체적으로 CSS 스타일을 가지고 있는데 엔진마다 조금씩 다르다.
      - 브라우저에서 기본적으로 들어가는 margin, padding 때문에 혼동이 올 수도 있음
      - CSS 초기화: 작업의 편리성을 위해 차이나는 부분들에 미리 스타일을 주는 방식
      - 정답이 없다. 초기화 CSS는 검색엔진을 통해 조금만 검색해봐도 예시가 많이 나오니, 그 예시들을 복사해서 사용해도 된다.
    - 권장사항
      - 초기화는 정말 최소한의 스타일만 주자 (여백 정도의 최소한만)
        - 대형 사이트에서 부분적 개편할 때 개편이 아직 안된 페이지들(잘못된 초기화 CSS를 그대로 사용하고 있는 페이지)로 인해 잘못된 초기화 CSS를 또 다시 계속 써야만 하는 상황이 올 수도 있음.
        - 처음 공부하는 입장이라면, 한번 초기화 없이 CSS를 작성해서 크로스 브라우징 해보는 것도 좋은 방법
      - 속성의 상속을 무시하게 만들지 말 것
        - ex: font-size를 다음과 같이 선언하고 p의 font-size를 바꿔줬을 때, span도 부모의 속성을 따라가기 바라지만 CSS 초기화때문에 안된다.

          ```
          * {
            margin: 0;
            padding: 0;
            font-size: 12px;
            font-family: 돋움, 'dotum', arial, helvetica, sans-serif;
          }
          ```
          ```
          <p>동해 물과 <strong>백두산</strong>이 마르고 닳도록...</p>
          ```
          
* IE의 cross browsing
  - IE는 사용자가 윈도우 업데이트 해야 업데이트가 되기 때문에 IE 버전 별로도 크로스 브라우징 해야함.
  - IE Hack
    - 스타일을 줄 때 특수문자를 넣어서, 다른 브라우저들에서는 인식을 못하지만, IE의 특정 버전의 브라우저에서는 인식하게 하는 방법
      ```
      div {
        color: red;
        *color: blue; /* IE7이하 용 */
        _color : green; /* IE6 용 */
      }
      ```
  - IE용 주석 이용 (conditional comments)
        
      
    

CSS debugging, 개발자 도구
-------------


CSS selector 2
-------------


다중 CSS style sheet & 우선순위
-------------


display & visibility
-------------


overflow, float, clear
-------------


float 레이아웃
-------------


table style
-------------

