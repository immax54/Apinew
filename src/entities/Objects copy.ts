import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("Typedepartment")
export class Typedepartment
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
department!:string
}