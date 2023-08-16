import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  // boards라는 배열 변수의 타입으로 board 모델 배열 정의
  private boards: Board[] = [];

  // 리턴 타입으로 board 모델 배열을 정의한다.
  // 이후 컨트롤러의 서비스 호출 부분에서도 타입을 정의해 주어야 한다.
  getAllBoards(): Board[] {
    return this.boards;
  }
}
