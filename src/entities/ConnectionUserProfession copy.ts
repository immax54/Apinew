import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
import { Professions } from "./Professions";

@Entity("ConnectionUserProfession")
export class ConnectionUserProfession
{
@PrimaryGeneratedColumn()
id!:number;


@ManyToOne(
    () =>Professions,
    Professions=> Professions.id
    )

@Column('integer')
@JoinColumn({
    name:'professionId'
})
Professions:Professions


@ManyToOne(
    () =>User,
    User=> User.id
    )
@Column('integer')
@JoinColumn({
    name:'userId'
})
User:User

@Column('text')
created!:string
}