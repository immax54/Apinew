import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Fridges } from "./Fridges";
import { TemperatureСontrolLog } from "./TemperatureСontrol";

@Entity("ConnectionFridgesTemperatureLog")
export class ConnectionFridgesTemperatureLog
{
@PrimaryGeneratedColumn()
id!:number;


@ManyToOne(
    () =>Fridges,
    Fridges=> Fridges.appliance
    )

@Column('integer')
@JoinColumn({
    name:'FridgeId'
})
Fridges:Fridges


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