export enum Role {
  PROFESSOR = "professor",
  CURRENT_STUDENTS = "current students",
  POST_DOCTORAL_RESEARCHERS = "post doctoral researchers",
  INTERNS = "interns",
  ALUMNI = "alumni",
}

const enum Types {
  OBJECT = "object",
  ARRAY = "array",
  OBJECT_ARRAY = "object_array",
  NESTED_OBJECT = "nested_object",
  NESTED_ARRAY = "nested_array",
  NESTED_OBJECT_ARRAY = "nested_object_array",
}

export interface IProperties {
  type: Types;
  data: any;
}

export interface ILinks {
  label: string;
  url: string;
}

export interface Person {
  _id: string;
  created_at: string;

  name: string;

  description: string;

  properties: Record<string, IProperties>;

  role: Role;

  socials: ILinks[];
}
