import { OneToMany, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { ConnectionFridgesTemperatureLog } from "./ConnectionFridgesTemperatureLog";
import { Appliances } from "./Devices";
@Entity("Fridges")
export class Fridges extends Appliances
{
@PrimaryGeneratedColumn()
id!:number;

@OneToMany(
    ()=>ConnectionFridgesTemperatureLog,
    ConnectionFridgesTemperatureLog=>ConnectionFridgesTemperatureLog.Fridges,{
        cascade: true,
    }
)
ConnectionFridgesTemperatureLog:ConnectionFridgesTemperatureLog
}