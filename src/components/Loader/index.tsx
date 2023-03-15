import React from "react";
import { Loader } from "@progress/kendo-react-indicators";

import './loader.css'

const LoaderComponent: React.FC<ILoaderProps> = ({
  isLoading = false,
  loadingMessage = "Loading...",
}) => {
  if (isLoading) {
    return (
      <div className="loader-container">
        <Loader size="large" type="infinite-spinner" />
        <h3>{loadingMessage}</h3>
      </div>
    );
  }

  return null;
};

export default LoaderComponent;
