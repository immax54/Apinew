import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./Client";

@Entity('accounts')
export class Account  {
    @PrimaryGeneratedColumn()
    id!:number

    @Column('text')
    login!:string

    @Column('text')
    password!:string

    @Column('boolean')
    confirm!:boolean;

    @Column('text')
    created!:Date;
    
    
@ManyToOne(
    () =>User,
    user => user.Account
    )

@Column('numeric')
@JoinColumn({
    name:'user_id'
})
user:User
}