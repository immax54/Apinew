import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Account } from "./Accounts";
import { Bracklog } from "./Brack";
import { Health } from "./Health";
import { TemperatureControlLog } from "./TemperatureControl";
import { ConnectionUserRole } from "./ConnectionUserRole";
import { ConnectionUserProfession } from "./ConnectionUserProfession";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @Column("text")
  surname!: string; // обычный работник привязан к обьекту

  @Column("text")
  otch!: string;

  @Column("boolean")
  deleted!: boolean;

  @Column("boolean")
  banned!: boolean;

  @OneToMany(() => Bracklog, (Bracklogs) => Bracklogs.user, {
    cascade: true,
  })
  Bracklogs: Bracklog;

  @OneToMany(
    () => ConnectionUserProfession,
    (ConnectionUserProfessions) => ConnectionUserProfessions.Users,
    {
      cascade: true,
    }
  )
  ConnectionUserProfessions: ConnectionUserProfession;

  @OneToMany(() => Account, (Accounts) => Accounts.user, {
    cascade: true,
  })
  Accounts: Account;

  @OneToMany(
    () => ConnectionUserRole,
    (ConnectionUserRoles) => ConnectionUserRoles.Users,
    {
      cascade: true,
    }
  )
  ConnectionUserRoles: ConnectionUserRole;

  @OneToMany(() => Health, (Healths) => Healths.Users, {
    cascade: true,
  })
  Healths: Health;

  @OneToMany(
    () => TemperatureControlLog,
    (TemperatureControlLogs) => TemperatureControlLogs.user,
    {
      cascade: true,
    }
  )
  TemperatureСontrolLogs: TemperatureControlLog;
}
