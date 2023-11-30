import { CarMakeType } from "./CarMakeType";
import { PaginateType } from "./PaginateType";

export type CarDataType = {
  id: number | string;
  make_id: number | string;
  name: string;
  make: CarMakeType;
  collection: PaginateType;
};
