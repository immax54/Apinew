import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Roles } from "./Roles";

@Entity("ConnectionUserRole")
export class ConnectionUserRole {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Roles, (Role) => Role.id)
  @Column("integer")
  @JoinColumn({
    name: "roleId",
  })
  Role: Roles;

  @ManyToOne(() => User, (Users) => Users.id)
  @Column("integer")
  @JoinColumn({
    name: "userId",
  })
  Users: User;
}
