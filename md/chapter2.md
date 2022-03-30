> 리팩터링(하다): 소프트웨어의 겉보기 동작은 그대로 유지한 채, 여러 가지 리팩터링 기법을 적용해서 소프트웨어를 재구성하다.


단계를 잘게 나눠서 작업하는 것을 강조함.   

리팩토링하는 동안에는 코드가 항상 정상 작동하기 때문에 전체 작업이 끝나지 않았더라도 언제든 멈출 수 있다.
> 누군가 "리팩터링하다가 코드가 깨져서 며칠이나 고생했다"라고 한다면, 십중팔구 리팩터링한 것이 아니다.
> 


### 리팩토링과 성능최적화의 차이?
리팩터링은 성능 최적화와 비슷하다. 둘 다 코드를 변경하지만 전반적인 기능은 그대로 유지한다.  
단지 목적이 다를 뿐이다. 리팩터링의 목적은 코드를 이해하고 수정하기 쉽게 만드는 것이다. 
프로그램 성능이 좋아질 수도, 나빠질 수도 있다.  
반면 성능 최적화는 오리지 속도 개선에만 신경 쓴다. 그래서 목표 성능에 반드시 도달해야한다면 코드는 다루기에
더 어렵게 바뀔 수도 있음을 각오해야한다.  
  

### 기능추가냐, 리팩토링이냐
기능추가를 할 때는 기존 코드를 절대 건드리지 않고 새 기능을 추가하기만 한다. 테스트코드를 작성한다.  
반면 리팩토링은 기능 추가는 절대 하지 않기로 다짐하고, 오로지 코드 재구성에만 전념한다. 
테스트 코드도 작성하지 않는다. 부득이 인터페이스를 변경할 때만 기존 테스트 코드를 수정한다.


### 리팩터링하는 이유
- 리팩터링하면 소프트웨어 설계가 좋아진다.
- 리팩터링하면 소프트웨어를 이해하기 쉬워진다.
- 리팩터링하면 버그를 쉽게 찾을 수 잇다.
- 리팩터링하면 프로그래밍 속도를 높일 수 있다.