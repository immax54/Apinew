
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
import { Dishes } from "./Dishes";
@Entity("BrackLog")
export class Bracklog
{
@PrimaryGeneratedColumn()
id!:number;

@ManyToOne(
    () =>Dishes,
    dish => dish.dish
    )

@Column('integer')
@JoinColumn({
    name:'dish'
})
dish:Dishes

@Column('integer')
timespend!:number

@Column('integer')
rating!:number 

@Column('integer')
serveTime!:number

@Column('text')
note!:string

@Column('text')
date!:string;

@ManyToOne(
    () =>User,
    user => user.Bracklog
    )

@Column('integer')
@JoinColumn({
    name:'user_id'
})
user:User

@ManyToOne(
    () =>User,
    userdone => userdone.Bracklog//date + id_usera    
    )

@Column('integer')
@JoinColumn({
    name:'userdone'//id_Bracklog +date+ id_usera    
})
userdone:User
}