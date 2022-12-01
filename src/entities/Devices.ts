import { Column, Entity, OneToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { TemperatureСontrolLog } from "./TemperatureСontrol";
@Entity("Appliances")
export class Appliances
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
appliance!:string

@Column('text')
normalpoint!:string

@Column('integer')
startnormalpoint!:number

@Column('integer')
endnormalpoint!:number

}