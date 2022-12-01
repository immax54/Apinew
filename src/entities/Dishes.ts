import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Bracklog } from "./Brack";
import { ConnectionCategoryDish } from "./ConnectionCategoryDish";
@Entity("Dishes")
export class Dishes
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
dish!:string

@Column('boolean')
active!:boolean

@Column('text')
created!:string
@OneToMany(
    ()=>Bracklog,
    Bracklog=>Bracklog.dish,{
        cascade: true,
    }
)
Bracklog:Bracklog

@OneToMany(
    ()=>ConnectionCategoryDish,
    ConnectionCategoryDish=>ConnectionCategoryDish.Dish,{
        cascade: true,
    }
)
ConnectionCategoryDish:ConnectionCategoryDish
}