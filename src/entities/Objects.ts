import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("subject")
export class Subject
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
name!:string
}