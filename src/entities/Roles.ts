import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConnectionUserRole } from "./ConnectionUserRole";

@Entity("Roles")
export class Roles {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @OneToMany(
    () => ConnectionUserRole,
    (ConnectionUserRole) => ConnectionUserRole.Role,
    {
      cascade: true,
    }
  )
  ConnectionUserRole: ConnectionUserRole;
}
