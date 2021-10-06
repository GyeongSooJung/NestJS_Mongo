import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://test:test1234@54.65.19.125:27017/admin'), CatsModule],
})
export class AppModule {}
