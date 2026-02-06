interface CrudMethodConfig<T> {
  adapter?:
    | ((data: any) => T)
    | {
        toApi?: (data: any) => any;
        fromApi?: (data: any) => T;
      };
  mockData?: (...args: any[]) => unknown;
}

export type CrudConfig<TEntity = unknown> = {
  getAllConfig?: CrudMethodConfig<TEntity[]>;
  getByIdConfig?: CrudMethodConfig<TEntity>;
  createConfig?: CrudMethodConfig<TEntity>;
  updateConfig?: CrudMethodConfig<TEntity>;
  deleteConfig?: CrudMethodConfig<void>;
};

export type CrudTypes<TEntity = unknown> = {
  getAll: TEntity[];
  getById: TEntity;
  createReq: Partial<TEntity>;
  createRes: TEntity;
  updateReq: Partial<TEntity>;
  updateRes: TEntity;
};
