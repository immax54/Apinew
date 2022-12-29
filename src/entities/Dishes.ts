import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bracklog } from "./Brack";
import { Categories } from "./Categories";

@Entity("Dishes")
export class Dishes {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  dish!: string;

  @Column("boolean")
  active!: boolean;

  @OneToMany(() => Bracklog, (Bracklogs) => Bracklogs.dish, {
    cascade: true,
  })
  Bracklogs: Bracklog;

  @ManyToOne(() => Categories, (Category) => Category.id)
  @Column("integer")
  @JoinColumn({
    name: "categoryId",
  })
  Category: Categories;
}
