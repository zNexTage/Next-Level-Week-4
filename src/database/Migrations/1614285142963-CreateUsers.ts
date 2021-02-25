import { MigrationInterface, QueryRunner, Table } from "typeorm";
import TableNames from "../TableNames";

export class CreateUsers1614285142963 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const userTable = new Table({
            name: TableNames.USERS,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name:"name",
                    type:"varchar"
                },
                {
                    name:"email",
                    type:"varchar"
                },
                {
                    name:"createdAt",
                    type:"timestamp",
                    default:"now()"
                },
                
            ]
        })

        await queryRunner.createTable(userTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(TableNames.USERS)
    }

}
