export type Role = "patient" | "doctor" | null;

export type User = {
  email: string;
  name: string;
  picture: string;
  familyName: string;
  fullName: string;
  role: Role;
};
