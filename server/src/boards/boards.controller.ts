import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  // Nest.js 에서는 요청값을 받을 때 아래와 같이 데코레이션으로 받아준다.
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    // 위와 같이 리턴값의 타입을 정해줄 수도 있다.
    console.log({ title, description });
    return this.boardsService.createBoard(title, description);
  }
}
