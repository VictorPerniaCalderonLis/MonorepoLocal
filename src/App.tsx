import { RowFlexLayout } from './layouts/RowFlexLayout/RowFlexLayout';
import { AppRouter } from './router';

export const App = () => {
  // TODO: en caso de tener autenticación por @lis-data-solutions/lis-security-keycloak
  // const { isLoading, user } = useAuth();

  // if (isLoading)
  //   return (
  //     <div className="h-full w-full">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // if (!user) return <NotFoundPage />;
  return (
    <RowFlexLayout>
      <AppRouter />
    </RowFlexLayout>
  );
};
