export interface ExampleProject {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  ownerId: number;
  budget: number;
  isPublic: boolean;
  displayName: string;
  budgetFormatted: string;
}
