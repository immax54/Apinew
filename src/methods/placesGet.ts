import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { ConnectionSubjectPlaces } from "../entities/ConnectionSubjectPlaces";

export async function placesGet(
  AppDataSource: DataSource,
  res: ServerResponse
): Promise<void> {
  function writeend(data: string): void {
    res.write(data);
    res.end();
  }
  const rolesRepository = AppDataSource.getRepository(ConnectionSubjectPlaces);
  rolesRepository
    .createQueryBuilder("Building")
    .leftJoin("Building.Subjects", "Subject")
    .addSelect(["Subject.name", "Subject.address", "Subject.type"])
    .leftJoin("Building.Place", "Places")
    .addSelect(["Places.name"])
    .leftJoin("Building.Departments", "Department")
    .addSelect(["Department.name"])
    .getMany()
    .then((data) => writeend(JSON.stringify(data)))
    .catch((error) => res.write(error));
}
