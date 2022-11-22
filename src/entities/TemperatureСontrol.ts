import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
@Entity("TemperatureСontrolLog")
export class TemperatureСontrolLog
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
warehouse!:string

@Column('integer')
temperature!:number

@Column('integer')
vlazhn!:number

@Column('text')
date!:string;

@Column('text')
time!:string

@Column('boolean')
sign!:boolean// id_Tempcontrol_log +date+ id_usera          Подпись таблица

@ManyToOne(
    () =>User,
    user => user.TemperatureСontrolLog
    )

@Column('integer')
@JoinColumn({
    name:'user_id'
})
user:User
}
