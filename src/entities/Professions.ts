import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("Professions")
export class Professions
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
name!:string
}