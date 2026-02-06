export const WarehouseHeaderStart = () => {
  return (
    <div className="inline-flex h-[41px] shrink-0 items-center">
      <img
        src="/icons/favicon-irizar.svg"
        alt="Irizar"
        className="h-full w-auto min-[835px]:hidden"
      />

      <img
        src="/icons/irizar-logo-grafito.svg"
        alt="Irizar"
        className="hidden h-full w-auto min-[835px]:block"
      />
    </div>
  );
};

export default WarehouseHeaderStart;
