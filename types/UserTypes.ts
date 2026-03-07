
export enum RoleEnum {
  PATIENT = "patient",
  DOCTOR = "doctor",
}

export type User = {
  email: string;
  name: string;
  picture: string;
  familyName: string;
  fullName: string;
  role: RoleEnum | null;
};
