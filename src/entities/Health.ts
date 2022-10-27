import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
@Entity("Health")
export class Health
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
proffesion!:string

@Column('boolean')
okz!:boolean

@Column('boolean')
anginamark!:boolean

@Column('text')
diagnos!:string

@Column('boolean')
passtowork!:boolean;

@Column('date')
created!:Date;

@ManyToOne(
    () =>User,
    user => user.Health
    )
@JoinColumn({
        name:'user_id'
    })
    user:User

}