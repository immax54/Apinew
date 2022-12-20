import type { DataSource } from "typeorm";
import { Appliance } from "../entities/Devices";


export async function applianceGet(
  AppDataSource: DataSource,
  res:any[string]
): Promise<any> {
  function writeend(data: any[string]): void {
    res.write(data);
    res.end();
  }
  const TempcontrolRepository = AppDataSource.getRepository(Appliance);
  TempcontrolRepository.createQueryBuilder("Appliance")
    .leftJoin("Appliance.ConnectionSubjectPlaces", "ConnectionSubjectPlaces")
    .leftJoin("ConnectionSubjectPlaces.Subject", "Subject")
    .addSelect(["Subject.name"])
    .leftJoin("ConnectionSubjectPlaces.Places", "Places")
    .addSelect(["Places.name"])
    .leftJoin("ConnectionSubjectPlaces.Department", "Department")
    .addSelect(["Department.name"])
    .getMany()
    .then((data) => writeend(JSON.stringify(data)));
  }