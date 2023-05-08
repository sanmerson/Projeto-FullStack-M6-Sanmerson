import { MigrationInterface, QueryRunner } from "typeorm";

export class DefaultValue1683277760629 implements MigrationInterface {
    name = 'DefaultValue1683277760629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_superuser" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "is_superuser" SET DEFAULT true`);
    }

}
