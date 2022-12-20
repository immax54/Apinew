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

  @OneToMany(() => Bracklog, (Bracklog) => Bracklog.user, {
    cascade: true,
  })
  Bracklog: Bracklog;

  @OneToMany(() => Bracklog, (Bracklog) => Bracklog.userdone, {
    cascade: true,
  })
  @OneToMany(
    () => ConnectionUserProfession,
    (ConnectionUserProfession) => ConnectionUserProfession.User,
    {
      cascade: true,
    }
  )
  ConnectionUserProfession: ConnectionUserProfession;

  @OneToMany(() => Account, (Account) => Account.user, {
    cascade: true,
  })
  Account: Account;

  @OneToMany(
    () => ConnectionUserRole,
    (ConnectionUserRole) => ConnectionUserRole.User,
    {
      cascade: true,
    }
  )
  ConnectionUserRole: ConnectionUserRole;

  @OneToMany(() => Health, (Health) => Health.User, {
    cascade: true,
  })
  Health: Health;

  @OneToMany(
    () => TemperatureControlLog,
    (TemperatureControlLog) => TemperatureControlLog.user,
    {
      cascade: true,
    }
  )
  TemperatureСontrolLog: TemperatureControlLog;
}
