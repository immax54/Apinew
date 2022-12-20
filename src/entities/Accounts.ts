import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("accounts")
export class Account {
  @PrimaryGeneratedColumn() // проф + role... таблиц связи проф, между пользователями
  id!: number;

  @Column("text")
  login!: string;

  @Column("text")
  password!: string;

  @ManyToOne(() => User, (user) => user.Account)
  @Column("numeric")
  @JoinColumn({
    name: "user_id",
  })
  user: User;
}
