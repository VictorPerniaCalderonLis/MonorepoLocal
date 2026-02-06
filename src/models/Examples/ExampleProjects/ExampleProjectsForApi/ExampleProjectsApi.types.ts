export interface ExampleProjectApiGetByIdRes {
  project_id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  created_at: string;
  updated_at: string;
  owner_id: number;
  budget: number;
  is_public: boolean;
}

export type ExampleProjectApiGetAllRes = ExampleProjectApiGetByIdRes[];

export interface ExampleProjectApiCreateReq {
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  owner_id: number;
  budget: number;
  is_public: boolean;
}

export type ExampleProjectApiUpdateReq = ExampleProjectApiCreateReq;
