import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import TableNames from "../database/TableNames";

@Entity(TableNames.USERS)
class User{
    @PrimaryGeneratedColumn()
    readonly id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @CreateDateColumn()
    createdAt:Date
}

export default User;