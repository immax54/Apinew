import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./Client";
import { Roles } from "./Roles";

@Entity("ConnectionUserRole")
export class ConnectionUserRole
{
@PrimaryGeneratedColumn()
id!:number;


@ManyToOne(
    () =>Roles,
    Roles=> Roles.id
    )

@Column('integer')
@JoinColumn({
    name:'roleId'
})
Roles:Roles


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