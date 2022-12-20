import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ConnectionSubjectPlaces } from "./ConnectionSubjectPlaces";

@Entity("Department")
export class Department {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @OneToMany(
    () => ConnectionSubjectPlaces,
    (ConnectionSubjectPlaces) => ConnectionSubjectPlaces.Department,
    {
      cascade: true,
    }
  )
  ConnectionSubjectPlaces: ConnectionSubjectPlaces;
}
