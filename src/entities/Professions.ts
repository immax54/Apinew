import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConnectionUserProfession } from "./ConnectionUserProfession";

@Entity("Profession")
export class Profession {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @OneToMany(
    () => ConnectionUserProfession,
    (ConnectionUserProfessions) => ConnectionUserProfessions.Professions,
    {
      cascade: true,
    }
  )
  ConnectionUserProfessions: ConnectionUserProfession;
}
