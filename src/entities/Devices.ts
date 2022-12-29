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
    (ConnectionSubjectPlace) => ConnectionSubjectPlace.id
  )
  @Column("integer")
  @JoinColumn({
    name: "placeId",
  })
  ConnectionSubjectPlace: ConnectionSubjectPlaces;

  @OneToMany(
    () => TemperatureControlLog,
    (TemperatureControlLogs) => TemperatureControlLogs.Appliances,
    {
      cascade: true,
    }
  )
  TemperatureControlLogs: TemperatureControlLog;
}
