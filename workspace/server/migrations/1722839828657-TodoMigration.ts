import { MigrationInterface, QueryRunner } from "typeorm";

export class TodoMigration1722839828657 implements MigrationInterface {
    name = 'TodoMigration1722839828657'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`todos\` (\`id\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`todo\` varchar(255) NOT NULL, \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`closeDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`isClose\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tag_maps\` (\`id\` varchar(255) NOT NULL, \`todoId\` varchar(255) NOT NULL, \`tagId\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tags\` (\`id\` varchar(255) NOT NULL, \`tag\` varchar(255) NOT NULL, \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deleteDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`isDelete\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tags\``);
        await queryRunner.query(`DROP TABLE \`tag_maps\``);
        await queryRunner.query(`DROP TABLE \`todos\``);
    }

}
