import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Model } from './model/entities/model.entity';
import { ModelModule } from './model/model.module';
import { ProblemModule } from './problem/problem.module';

@Module({
  imports: [
    ModelModule,
    ProblemModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...(process.env.DATABASE_URL
        ? {
            url: process.env.DATABASE_URL,
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
            synchronize: true,
          }
        : {
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            synchronize: true,
          }),
      entities: [Model],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
