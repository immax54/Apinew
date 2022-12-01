import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity("Objects")
export class Objects
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
object!:string
}