import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { TemperatureControlLog } from "./TemperatureControl";

@Entity("NotificationsTempcontrolLog")
export class NotificationsTempcontrolLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("boolean")
  statusOfSign!: boolean;

  @Column("boolean")
  statusNotification!: boolean;

  @ManyToOne(
    () => TemperatureControlLog,
    (TemperatureControlLog) => TemperatureControlLog.id,
    {
      cascade: true,
    }
  )
  @Column("integer")
  @JoinColumn({
    name: "TemperatureСontrolLogId",
  })
  TemperatureControlLog: TemperatureControlLog;

  @ManyToOne(() => User, (User) => User.id)
  @Column("integer")
  @JoinColumn({
    name: "userId",
  })
  User: User;

  TemperatureСontrolLog: string;
}
