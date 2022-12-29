import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
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
    (TemperatureControlLogs) => TemperatureControlLogs.id,
    {
      cascade: true,
    }
  )
  @Column("integer")
  @JoinColumn({
    name: "TemperatureСontrolLogId",
  })
  TemperatureControlLogs: TemperatureControlLog;

  @ManyToOne(() => User, (Users) => Users.id)
  @Column("integer")
  @JoinColumn({
    name: "userId",
  })
  Users: User;

  TemperatureСontrolLog: string;
}
