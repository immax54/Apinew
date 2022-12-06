import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Bracklog } from "./Brack";

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

    @Column('text')
    additional!: string
    
    @Column('date')
    created!:Date;

    @OneToMany(
        ()=>Bracklog,
        Bracklog=>Bracklog.user
    )
    Bracklog:Bracklog
}
