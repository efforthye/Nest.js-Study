// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';

// 모듈은 데코레이터로, 주석이 달린 클래스이다.
// Nest.js가 애플리케이션 구조를 구성하는 데 사용하는 메타 데이터를 제공한다.
@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
