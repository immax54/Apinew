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
    fam!:string //список [блюд + active] update + список подписей + 

    @Column('text')
    otch!: string

    @Column('text')
    role!: string //update role, roles отдельно таблица вывод лист id в поле 

    @Column('boolean')
    deleted!: boolean

    @Column('boolean')
    banned!: boolean
    @Column('boolean')
    passwordToChange!:boolean
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
