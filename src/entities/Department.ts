import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConnectionSubjectPlaces } from "./ConnectionSubjectPlaces";

@Entity("Department")
export class Department {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @OneToMany(
    () => ConnectionSubjectPlaces,
    (ConnectionSubjectPlace) => ConnectionSubjectPlace.Departments,
    {
      cascade: true,
    }
  )
  ConnectionSubjectPlace: ConnectionSubjectPlaces;
}
