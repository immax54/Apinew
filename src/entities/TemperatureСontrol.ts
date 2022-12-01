import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
import { ConnectionDepartmentPlaces } from "./ConnectionDepartmentPlaces";
import { ConnectionFridgesTemperatureLog } from "./ConnectionFridgesTemperatureLog";
import { ConnectionLampsTemperatureLog } from "./ConnectionLampsTemperatureLog";
@Entity("TemperatureСontrolLog")
export class TemperatureСontrolLog
{
@PrimaryGeneratedColumn()
id!:number;

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
    () =>ConnectionDepartmentPlaces,
    ConnectionDepartmentPlaces => ConnectionDepartmentPlaces.id
    )

@Column('integer')
@JoinColumn({
    name:'placeId'
})
ConnectionDepartmentPlaces:ConnectionDepartmentPlaces

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
