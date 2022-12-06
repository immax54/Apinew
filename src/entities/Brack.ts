import { ClientRequest } from "http";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
@Entity("BrackLog")
export class Bracklog
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
Dish!:string

@Column('text')
DishMark!:string

@Column('text')
ConfirmHours!: string

@Column('text',{nullable:true})
Additional!: string

@Column('date')
created!:Date;

@ManyToOne(
() =>User,
user => user.Bracklog
)
@JoinColumn({
    name:'user_id'
})
user:User
}