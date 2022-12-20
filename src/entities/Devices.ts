import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConnectionSubjectPlaces } from "./ConnectionSubjectPlaces";
import { TemperatureControlLog } from "./TemperatureControl";

@Entity("Appliance")
export class Appliance {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @Column("text")
  normalpoint!: string;

  @Column("integer")
  startnormalpoint!: number;

  @Column("integer")
  endnormalpoint!: number;

  @ManyToOne(
    () => ConnectionSubjectPlaces,
    (ConnectionSubjectPlaces) => ConnectionSubjectPlaces.id
  )
  @Column("integer")
  @JoinColumn({
    name: "placeId",
  })
  ConnectionSubjectPlaces: ConnectionSubjectPlaces;

  @OneToMany(
    () => TemperatureControlLog,
    (TemperatureControlLog) => TemperatureControlLog.Appliance,
    {
      cascade: true,
    }
  )
  TemperatureControlLog: TemperatureControlLog;
}
