import { ExampleProject } from '../ExampleProjects.types';

export type ExampleProjectGetByIdRes = ExampleProject;

export type ExampleProjectGetAllRes = ExampleProjectGetByIdRes[];

export type ExampleProjectCreateReq = {
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  ownerId: number;
  budget: number;
  isPublic: boolean;
};

export type ExampleProjectUpdateReq = ExampleProjectCreateReq & {
  id: number;
};
