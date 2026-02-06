import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useCustomFormContext } from '../../../../../contexts';
import { UserFormValues } from '../../../../../models/Examples/ExampleUsers';
import { useExampleUserModule } from '../../hooks/ExampleUserCustomGrid';

export const ExampleUserForm = () => {
  const { formik, extraConfig, extraValues } =
    useCustomFormContext<UserFormValues>();

  const { handleChangeId, handleDeleteUser } = useExampleUserModule(formik);

  return (
    <form onSubmit={formik?.handleSubmit} className="p-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-2 shadow"
          onClick={() => handleChangeId(-1)}
        >
          <GoChevronDown />
        </button>
        <button
          type="button"
          className="p-2 shadow"
          onClick={() => handleChangeId(1)}
        >
          <GoChevronUp />
        </button>
        <div className="flex flex-col">
          <input
            name="id"
            type="number"
            className="w-24 rounded border p-1"
            value={formik?.values.id}
            onChange={formik?.handleChange}
            placeholder="id"
          />
          {formik?.errors.id && (
            <div className="mt-1 text-xs text-red-500">{formik.errors.id}</div>
          )}
        </div>
        <button type="submit" className="bg-blue-100 px-2 py-1 shadow">
          Guardar
        </button>
        <button
          type="button"
          className="bg-red-100 px-2 py-1 shadow"
          onClick={handleDeleteUser}
          disabled={!formik?.values.id}
        >
          Delete User
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-500">
        extraValues: {JSON.stringify(extraValues)}
        <br />
        extraConfig: {JSON.stringify(extraConfig)}
      </div>
    </form>
  );
};
