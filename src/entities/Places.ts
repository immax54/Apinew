import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("Places")
export class Places
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
name!:string

@Column('text')
created!:string
}