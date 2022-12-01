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
    fam!:string //обычный работник привязан к обьекту

    @Column('text')
    otch!: string

    @Column('boolean')
    deleted!: boolean

    @Column('boolean')
    banned!: boolean
    @Column('boolean')
    passwordToChange!:boolean //RequestPasswordChange Entity
    @Column('text')
    created!:Date;

    @OneToMany(
        ()=>Bracklog,
        Bracklog=>Bracklog.user,{
            cascade: true,
        }
    )
    Bracklog:Bracklog

    @OneToMany(
        ()=>Bracklog,
        Bracklog=>Bracklog.userdone,{
            cascade: true,
        }
    )

    @OneToMany(
        ()=>Account,
        Account=>Account.user,{
            cascade: true,
        }
    )
    Account:Account

    @OneToMany(
        ()=>Health,
        Health=>Health.User,{
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
