import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
@Entity("BrackLog")
export class Bracklog
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
dish!:string

@Column('text')
timespend!:string

@Column('text')
dishmark!:string

@Column('text')
acception!:string

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

@ManyToOne(
    () =>User,
    userdone => userdone.Bracklog
    )
@JoinColumn({
        name:'user_done'
    })
    userdone:User
}