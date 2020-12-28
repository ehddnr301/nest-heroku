import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelModule } from './model/model.module';

@Module({
  imports: [
    ModelModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...(process.env.DATABASE_URL
        ? { url: process.env.DATABASE_URL, ssl: true }
        : {
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
          }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
