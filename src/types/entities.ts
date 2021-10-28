export interface Technician {}
export interface Boiler {
  _id: string;
  model: string;
  status: string;
  boilerTypeId: string;
  buildingId: string;
  __v: number;
}
