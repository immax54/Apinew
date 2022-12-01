import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { ConnectionLampsTemperatureLog } from "./ConnectionLampsTemperatureLog";
import { Appliances } from "./Devices";
@Entity("Lamps")
export class Lamps extends Appliances
{
@PrimaryGeneratedColumn()
id!:number;

@OneToMany(
    ()=>ConnectionLampsTemperatureLog,
    ConnectionLampsTemperatureLog=>ConnectionLampsTemperatureLog.Lamp,{
        cascade: true,
    }
)
ConnectionLampsTemperatureLog:ConnectionLampsTemperatureLog
}
