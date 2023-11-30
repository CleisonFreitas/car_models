import { CarMakeType } from "./CarMakeType";

export type CarBindType = {
    id: number | string;
    make_id: number | string;
    name: string;
    make: CarMakeType;
}