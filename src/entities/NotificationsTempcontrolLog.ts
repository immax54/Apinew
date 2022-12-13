import { Column, Entity, PrimaryGeneratedColumn,OneToMany, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { User } from "./Client";
import { TemperatureСontrolLog } from "./TemperatureСontrol";
@Entity("NotificationsTempcontrolLog")
export class NotificationsTempcontrolLog
{
@PrimaryGeneratedColumn()
id!:number;

@Column('boolean')
statusOfSign!:boolean

@Column('boolean')
statusNotification!:boolean

@Column('text')
created!:Date

@ManyToOne(
    ()=>TemperatureСontrolLog,
    TemperatureСontrolLog=>TemperatureСontrolLog.id,{
        cascade: true,
    }
)
@Column('integer')
@JoinColumn({
    name:'TemperatureСontrolLogId'
})
TemperatureСontrolLog:TemperatureСontrolLog

@ManyToOne(
    () =>User,
    User=> User.id
    )

@Column('integer')
@JoinColumn({
    name:'userId'
})
User:User
}