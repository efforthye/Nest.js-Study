import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get() // @Get('.') 와 같다.
  // 메서드의 리턴 타입을 board 모델 배열로 정의
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
}
