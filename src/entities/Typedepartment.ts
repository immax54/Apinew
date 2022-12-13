import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("Department")
export class Department
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
name!:string
}