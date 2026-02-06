import { Route, Routes } from 'react-router-dom';
import { ExampleProjectPage } from './pages/Examples/ExampleProject/ExampleProjectPage';
import { ExampleUserPage } from './pages/Examples/ExampleUser/ExampleUserPage';
import { Home } from './pages/Home/HomePage';
import { NotFoundPage } from './pages/static/NotFound/NotFoundPage';

// TODO: en caso de tener autenticación por @lis-data-solutions/lis-security-keycloak
// const ProtectedRoute = ({
//   resource,
//   scope = 'view',
//   children,
// }: {
//   resource: string;
//   scope?: string;
//   children: React.ReactNode;
// }) => {
//   const { hasPermission } = useAuth();
//   if (!hasPermission(resource, scope)) {
//     return <Navigate to="/not-found" replace />;
//   }
//   return <>{children}</>;
// };

export const AppRouter = () => {
  return (
    <Routes>
      {/* static */}
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />

      {/* examples */}
      <Route path="/examples">
        <Route
          index
          element={
            // <ProtectedRoute resource="examples">
            <ExampleUserPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="example1"
          element={
            // <ProtectedRoute resource="examples">
            <ExampleUserPage />
            // </ProtectedRoute>
          }
        />
        <Route
          path="example2"
          element={
            // <ProtectedRoute resource="examples">
            <ExampleProjectPage />
            // </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
