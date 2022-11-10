import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Account } from "./Accounts";
import { Bracklog } from "./Brack";
import { Health } from "./Health";
import { TemperatureСontrolLog } from "./TemperatureСontrol";

@Entity('user')
export class User  {
    @PrimaryGeneratedColumn()
    id!:number

    @Column('text')
    name!:string

    @Column('text')
    fam!:string

    @Column('text')
    otch!: string

    @Column('text')
    role!: string

    @Column('boolean')
    deleted!: boolean

    @Column('boolean')
    banned!: boolean
    
    @Column('date')
    created!:Date;

    @OneToMany(
        ()=>Bracklog,
        Bracklog=>Bracklog.user,{
            cascade: true,
        }
    )
    Bracklog:Bracklog

    @OneToMany(
        ()=>Account,
        Account=>Account.user,{
            cascade: true,
        }
    )
    Account:Account

    @OneToMany(
        ()=>Health,
        Health=>Health.user,{
            cascade: true,
        }
    )
    Health:Health

    @OneToMany(
        ()=>TemperatureСontrolLog,
        TemperatureСontrolLog=>TemperatureСontrolLog.user,{
            cascade: true,
        }
    )
    TemperatureСontrolLog:TemperatureСontrolLog
}
