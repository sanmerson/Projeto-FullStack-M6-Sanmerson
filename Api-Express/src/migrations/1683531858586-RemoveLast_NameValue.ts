import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveLastNameValue1683531858586 implements MigrationInterface {
    name = 'RemoveLastNameValue1683531858586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "last_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "last_name" character varying NOT NULL`);
    }

}
