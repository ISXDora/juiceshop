import { JuiceFlavors } from '../../../shared/types';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaInitial1725219179146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(
      `CREATE TYPE "juices_flavors_enum" AS ENUM(${Object.values(JuiceFlavors)
        .map(f => `'${f}'`)
        .join(', ')})`,
    );

    await queryRunner.query(
      `CREATE TABLE "juices" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
            "price" DECIMAL(5, 2) NOT NULL,
            "amount" INTEGER NOT NULL,
            "ice" BOOLEAN DEFAULT false,
            "sugar" BOOLEAN DEFAULT false,
            "type" "juices_flavors_enum" NOT NULL,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now()
          )`,
    );

    await queryRunner.query(
      `CREATE TABLE "orders" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
            "pickupDate" VARCHAR NOT NULL,
            "addressMachine" INTEGER NOT NULL,
            "total" VARCHAR NOT NULL,
            "created_at" TIMESTAMP NOT NULL DEFAULT now(),
            "updated_at" TIMESTAMP NOT NULL DEFAULT now()
          )`,
    );

    await queryRunner.query(
      `CREATE TABLE "orders_juices" (
            "orderId" UUID NOT NULL,
            "juiceId" UUID NOT NULL,
            CONSTRAINT "PK_orders_juices" PRIMARY KEY ("orderId", "juiceId"),
            CONSTRAINT "FK_order" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE,
            CONSTRAINT "FK_juice" FOREIGN KEY ("juiceId") REFERENCES "juices"("id") ON DELETE CASCADE
          )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "orders_juices"`);

    await queryRunner.query(`DROP TABLE "orders"`);

    await queryRunner.query(`DROP TABLE "juices"`);

    await queryRunner.query(`DROP TYPE "juices_flavors_enum"`);

    await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
  }
}
