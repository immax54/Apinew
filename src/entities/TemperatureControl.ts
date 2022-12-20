import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Appliance } from "./Devices";

@Entity("TemperatureСontrolLog")
export class TemperatureControlLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("integer")
  temperature!: number;

  @Column("integer")
  vlazhn!: number;

  @Column("text")
  date!: string;

  @Column("text")
  time!: string;

  @Column("boolean")
  sign!: boolean; // id_Tempcontrol_log +date+ id_usera          Подпись таблица

  @ManyToOne(() => Appliance, (Appliance) => Appliance.name)
  @Column("integer")
  @JoinColumn({
    name: "applianceId",
  })
  Appliance: Appliance;

  @ManyToOne(() => User, (user) => user.TemperatureСontrolLog)
  @Column("integer")
  @JoinColumn({
    name: "user_id",
  })
  user: User;
}
