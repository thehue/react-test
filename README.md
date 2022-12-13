# Jest 및 테스팅 라이브러리로 React 테스트하기

Udemy 강의 Jest 및 테스팅 라이브러리로 React 테스트하기 강의를 듣고 공부한 내용을 기록하는 repo입니다.  
회사에서 업무를 진행하면서 일일이 테스트하는 것이 너무 비효율적이라고 생각했고 해당 강의를 기반으로 테스트 코드를 좀 익숙하고 빠르게 짤 수 있도록 연습할 것입니다.  
강의는 Jest로 Integration Test까지만 하지만 cypress까지 적용하여 E2E 테스트까지 연습할 예정입니다.

### Types Of Tests

- Unit tests(단위 테스트)
  - 보통 함수나 별개의 React 컴포넌트 코드의 한 유닛 혹은 단위를 테스트하는 것.
  - 이 유닛이 다른 코드의 유닛과 상호 작용하는 것을 테스트하지 않는다.
- Integration tests(통합 테스트)
  - 여러 유닛이 함께 작동하는 방식을 테스트해서 유닛 간의 상호 작용을 테스트 하는 것
  - 컴포넌트 간의 상호작용을 테스트
- Functional tests (기능 테스트)
  - 소프트웨어의 특정 기능을 테스트 하는 것.
  - 특정 코드 함수가 아닌 소프트웨어의 일반적인 동작을 의미
    - ex) 입력란에 잘못된 데이터를 입력하면 빨갛게 변하는지 테스트
  - 코드가 아닌 동작을 테스트하는 것 - RTL이 사용자의 소프트웨어 사용을 테스트하는 것을 권장한다.
- Acceptance / End-to-end (E2E) Tests (인수 테스트)
  - 실제 브라우저가 필요하고 애플리케이션이 연결된 서버가 필요
  - Cypress, Selenum을 많이 사용해서 테스트
  - 해당 강의에서는 수동 테스트로 진행

### Different mindset from unit testing

**Unit Testing**
* 최대한 격리시켜야한다
* 해당 코드가 의존하는 부분을 가짜(mock)으로 대체한다. |
* 문제가 발생하거나 테스트에 실패시 외부 요인이 아니라 내부에 문제가 있는 것이다.
* 격리된 상태에서 컴포넌트를 테스트하면 애플리케이션 변경 사항을 확인할 수 있는 다른 컴포넌트가 없어서 state 차이만 관해서밖에 테스트할 수 밖에 없다. 그래서 격리된 유닛에서 실패를 쉽고 정확하게 파악할 수 있다.
* 사용자가 소프트웨어와 상호작용하는 방식과는 거리가 멀다.
* 리팩토링으로 테스트가 깨질 가능성이 높다.

**Functional Testing**
* 특정 동작이나 유저 플로우와 연관된 모든 단위를 포함한다.
* 사용자가 소프트웨어와 상호 작용하는 방식과 밀접하다.
* 리팩토링에도 영향 받지 않는다.
* 실패한 테스트를 디버깅 하기 어렵다. 

### TDD vs BDD

```
TDD와 BDD는 개발 습관입니다. BDD는 TDD를 기반으로 탄생했으며 이 둘은 같은 개발 습관을 공유합니다. 
이 개발 습관을 체화하면 코딩하는 과정에서 탄탄한 설계를 동시에 해내는 경험을 할 수 있습니다.

TDD를 사용한다면 유닛 단위의 개발이 정확하고 탄탄하게 진행될 수 있습니다. 그리고 자연스럽게 클린 아키텍처를 지향하게 됩니다.
BDD를 사용한다면 요구사항을 구체적으로 관리하며 개발할 수 있습니다. 주의할 점은 이때 유닛 테스트를 하지 않으면 각 모듈 간의 결합도가 강해질 수 있습니다. 
행동 시나리오 하나에는 보통 여러 함수들의 로직이 서로 상호작용하기 때문에, 각각을 따로 분리해 테스트 코드를 작성하지 않으면 그런 위험이 생깁니다.

추천해드리는 한 가지 방법은 TDD와 BDD 둘을 상호 보완하도록 사용하는 것입니다. 방법은 BDD 사이클 안에 TDD 사이클을 두는 것입니다. 
요구사항이 하나 주어질 때, BDD로 테스트를 작성하고 TDD를 하면서 개발하다가 마지막에 요구사항을 작성한 BDD의 테스트가 통과하는 것을 확인하는 것을 거대한 사이클 하나로 정할 수 있습니다.
프론트엔드 진영에서는 UI 혹은 View레이어에서 매우 강한 결합도를 가지는 설계를 하여 모듈의 유닛 테스트가 어려운 경우가 많이 보입니다. 
이런 설계를 가질 때에는 UI 혹은 View 레이어에서의 모듈들은 BDD만 하는 것이 유리할 수 있습니다.
```

출처: [https://cocoder16.tistory.com/77](https://cocoder16.tistory.com/77)

### Accessibility and Finding Elements

- Testing Library는 accessibility handles(스크린 리더)로 element를 찾는 것을 권장한다.
  - 참고 URL
    - [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
    - [https://testing-library.com/docs/queries/about/#priority](https://testing-library.com/docs/queries/about/#priority)
      1. Queries Accessible to Everyone
        1. getByRole
        2. getByLabelText
        3. getByPlaceholderText
        4. getByText
        5. getByDisplayValue
      2. Semantic Queries
        1. getByAltText
        2. getByTitle
      3. Test IDs
        1. getByTestId
    - Roles documentation: [https://www.w3.org/TR/wai-aria/#role_definitions](https://www.w3.org/TR/wai-aria/#role_definitions)
      - div같은 의미없는 태그도 role 역할을 줄 수 있다.
      - button, a → built-in roles

### Roles 디버깅을 위한 logRoles

role속성을 갖고 있는 html 태그를 출력해준다.

```tsx
import React from "react";
import { logRoles, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);
});
```