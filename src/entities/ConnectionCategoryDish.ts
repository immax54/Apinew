import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categories } from "./Categories";
import { Dishes } from "./Dishes";

@Entity("ConnectionCategoryDish")
export class ConnectionCategoryDish
{
@PrimaryGeneratedColumn()
id!:number;


@ManyToOne(
    () =>Categories,
    Category=> Category.id
    )

@Column('integer')
@JoinColumn({
    name:'categoryId'
})
Category:Categories


@ManyToOne(
    () =>Dishes,
    Dish=> Dish.id
    )
@Column('integer')
@JoinColumn({
    name:'dishId'
})
Dish:Dishes

@Column('text')
created!:string
}