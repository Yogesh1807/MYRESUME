import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import PersonalWebsite from "./personal";

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<h1>Oops! Something went wrong.</h1>}>
      <PersonalWebsite />
    </ErrorBoundary>
  );
};

export default App;
