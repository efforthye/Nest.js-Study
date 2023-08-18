import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'; // uuid 버전 1 사용
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  // boards라는 배열 변수의 타입으로 board 모델 배열 정의
  private boards: Board[] = [];

  // 리턴 타입으로 board 모델 배열을 정의한다.
  // 이후 컨트롤러의 서비스 호출 부분에서도 타입을 정의해 주어야 한다.
  getAllBoards(): Board[] {
    return this.boards;
  }

  // id로 특정 게시물 가져오기
  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) throw new NotFoundException(`Can't find Board with id ${id}`);
    return found;
  }

  // 게시글 생성 (제목, 내용)
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    // 생성할 게시물을 정의하여 준다. id는 임시로 uuid 모듈을 이용하여 처리해 주었다.
    const board: Board = {
      title,
      description,
      status: BoardStatus.PUBLIC, // 기본 공개 상태
      // uuid 모듈을 사용하여 임시 유니크 아이디 지정
      id: uuid(),
    };

    // 게시물 목록(로컬 메모리)에 추가하여 준다.
    this.boards.push(board);
    // 어떤 게시물이 생성되었는지 리턴한다.
    return board;
  }

  // 게시글 상태 수정
  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  // 게시글 삭제
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
