import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    (ConnectionSubjectPlace) => ConnectionSubjectPlace.Subjects,
    {
      cascade: true,
    }
  )
  ConnectionSubjectPlace: ConnectionSubjectPlaces;
}
