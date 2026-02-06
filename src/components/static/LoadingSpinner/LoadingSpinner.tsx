import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const LoadingSpinner = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <AiOutlineLoading3Quarters className="text-primary animate-spin text-4xl" />
    </div>
  );
};
