import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Objects } from "./Objects";
@Entity("Places")
export class Places
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
place!:string

@ManyToOne(
    () =>Objects,
    Object => Object.object
    )

@Column('integer')
@JoinColumn({
    name:'objectId'
})
Object:Objects

@Column('text')
created!:string
}