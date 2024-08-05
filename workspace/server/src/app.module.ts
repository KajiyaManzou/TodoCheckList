import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      database: 'tododb',
      username: 'todouser',
      password: 'Todos%8832',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      migrations: [__dirname + '/migration/**/*.js'],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
