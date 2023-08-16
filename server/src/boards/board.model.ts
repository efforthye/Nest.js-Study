// board 모델은 src/boards 폴더 내에 board.model.ts 파일을 생성하여 정의해 준다.

// 모델을 정의할 때는 클래스나 인터페이스를 이용한다. 인터페이스와 클래스의 차이점은 아래와 같다.
// * 인터페이스 : 변수의 타입만을 체크한다.
// * 클래스 : 변수의 타입을 체크함은 물론 인스턴스 또한 생성할 수 있다.

// ### 타입을 정의해주면 좋은 이유
// 리턴 타입을 정의해 주는 것은 선택 사항이지만,
// 이렇게 타입을 정의해줌으로서 원하는 타입과 다른 코드 사용시 에러가 발생한다.
// 또한 코드를 읽는 입장에서 코드를 더 쉽게 이해할 수 있다고 한다. (readable)

// 1. board 모델의 구조 정의 방법 - 인터페이스
// -> 이후 service 부분에서 보드에 대한 정보와 데이터 형식을 정의해 준다.
export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus; // 공개, 비공개 상태
}

// 1-2. 게시글 공개, 비공개 정의
export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
