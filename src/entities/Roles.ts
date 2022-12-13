import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
import { ConnectionUserRole } from "./ConnectionUserRole";
import { Dishes } from "./Dishes";
@Entity("Roles")
export class Roles
{
@PrimaryGeneratedColumn()
id!:number;

@Column("text")
name!:string;

@OneToMany(
    ()=>ConnectionUserRole,
    ConnectionUserRole=>ConnectionUserRole.Roles,          
    {
        cascade: true,
    }
)
ConnectionUserRole:ConnectionUserRole
}