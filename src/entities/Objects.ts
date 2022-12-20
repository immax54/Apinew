import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConnectionSubjectPlaces } from "./ConnectionSubjectPlaces";

@Entity("subject")
export class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @Column("text")
  address!: string;

  @Column("text")
  type!: string;

  @OneToMany(
    () => ConnectionSubjectPlaces,
    (ConnectionSubjectPlaces) => ConnectionSubjectPlaces.Subject,
    {
      cascade: true,
    }
  )
  ConnectionSubjectPlaces: ConnectionSubjectPlaces;
}
