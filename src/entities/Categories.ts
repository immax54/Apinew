import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,OneToMany } from "typeorm"
import { ConnectionCategoryDish } from "./ConnectionCategoryDish";
@Entity("Categories")
export class Categories
{
@PrimaryGeneratedColumn()
id!:number;

@Column('text')
category!:string

@Column('text')
created!:string

@OneToMany(
    ()=>ConnectionCategoryDish,
    ConnectionCategoryDish=>ConnectionCategoryDish.Category,{
        cascade: true,
    }
)
ConnectionCategoryDish:ConnectionCategoryDish
}