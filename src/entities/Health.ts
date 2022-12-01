import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
import { Professions } from "./Professions";
@Entity("Health")
export class Health
{
@PrimaryGeneratedColumn()
id!:number;

@ManyToOne(
    () =>Professions,
    Professions => Professions.id
    )

@Column('integer')
@JoinColumn({
    name:'professionId'
})
Professions:Professions

@Column('boolean')
okz!:boolean

@Column('boolean')
anginamark!:boolean

@Column('text')
diagnos!:string

@Column('boolean')
passtowork!:boolean;

@Column('text')
date!:string;

@Column('boolean')
signSupervisor!:boolean;//Подпись, заполнение менеджером, получение пуш уведомления о соглассии с подписанием; id + date + iduserfrom + userto с журнала здоровья

@Column('boolean')
signWorker!:boolean;//id_health_log +date+id_usera

@ManyToOne(
    () =>User,
    User => User.Health
    )

@Column('integer')
@JoinColumn({
    name:'user_id'
})
User:User
}