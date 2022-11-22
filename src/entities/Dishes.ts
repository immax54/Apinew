import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("Dishes")
export class Dishes
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
dish!:string

@Column('boolean')
active!:boolean

@Column('text')
category!:string
}