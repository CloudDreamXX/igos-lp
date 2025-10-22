import { AppRouterProvider } from './providers/router/AppRouter';

export const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <AppRouterProvider />
    </div>
  );
};
