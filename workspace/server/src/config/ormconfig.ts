import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    database: 'tododb',
    username: 'todouser',
    password: 'Todos%8832',
    entities: ['src/entities/*.model{.ts,.js}'],
    migrations: ['migrations/*.ts'],
    synchronize: true,
    logging: true,
    subscribers: [],
});
