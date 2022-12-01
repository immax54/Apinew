import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Lamps } from "./Lamps";
import { Typedepartment } from "./Objects copy";
import { Places } from "./Places";
import { TemperatureСontrolLog } from "./TemperatureСontrol";

@Entity("ConnectionLampsTemperatureLog")
export class ConnectionLampsTemperatureLog
{
@PrimaryGeneratedColumn()
id!:number;


@ManyToOne(
    () =>Lamps,
    Lamps=> Lamps.appliance
    )
@Column('integer')
@JoinColumn({
    name:'LampId'
})
Lamp:Lamps

@ManyToOne(
    () => TemperatureСontrolLog,
    TemperatureСontrolLog=> TemperatureСontrolLog.id
    )
@Column('integer')
@JoinColumn({
    name:'TemperatureLogId'
})
TemperatureСontrolLog:TemperatureСontrolLog
}