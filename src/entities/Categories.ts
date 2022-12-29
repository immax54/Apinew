import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Dishes } from "./Dishes";

@Entity("Categories")
export class Categories {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @OneToMany(() => Dishes, (Dish) => Dish.Category, {
    cascade: true,
  })
  Dish: Dishes;
}
