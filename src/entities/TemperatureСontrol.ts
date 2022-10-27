import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
@Entity("TemperatureСontrolLog")
export class TemperatureСontrolLog
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
warehouse!:string

@Column('text')
temperature!:string

@Column('text')
vlazhn!:string

@Column('date')
created!:Date;

@ManyToOne(
    () =>User,
    user => user.TemperatureСontrolLog
    )
    @JoinColumn({
        name:'user_id'
    })
    user:User

}