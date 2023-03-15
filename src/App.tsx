import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import CapeRoutes from "Routes";

import "styles/dist/css/food-report.css";
import "App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CapeRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
