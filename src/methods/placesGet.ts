import type { DataSource } from "typeorm";
import { ConnectionSubjectPlaces } from "../entities/ConnectionSubjectPlaces";


export async function placesGet(
  AppDataSource: DataSource,
  res:any[string]
): Promise<any> {
  function writeend(data: any[string]): void {
    res.write(data);
    res.end();
  }
  const rolesRepository = AppDataSource.getRepository(
    ConnectionSubjectPlaces
  );
  rolesRepository
    .createQueryBuilder("Building")
    .leftJoin("Building.Subject", "Subject")
    .addSelect(["Subject.name", "Subject.address", "Subject.type"])
    .leftJoin("Building.Places", "Places")
    .addSelect(["Places.name"])
    .leftJoin("Building.Department", "Department")
    .addSelect(["Department.name"])
    .getMany()
    .then((data) => writeend(JSON.stringify(data)));
  }