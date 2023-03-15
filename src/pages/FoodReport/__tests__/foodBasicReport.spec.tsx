import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import FoodBasicReport from "../FoodBasicReport";

describe("food basic report", () => {
  it("should render food basic report component", () => {
    const onFavoriteToggle = vi.fn();
    const foodReportData = {
      fdcId: 2353623,
      description:
        "A Low-Starch and High-Fiber Diet Intervention Impacts the Microbial Community of Raw Bovine Milk",
      dataType: "Experimental",
      publicationDate: "2022-10-28",
      score: 1,
      foodNutrients: [],
      foodCode: "",
      foodClass: "",
      scientificName: "",
      brandOwner: "",
      gtinUpc: "",
      ingredients: "",
      ndbNumber: 0,
      additionalDescriptions: "",
      allHighlightFields: "",
      foodCategory: {
        code: "123",
      },
    };

    render(
      <FoodBasicReport
        foodReportData={foodReportData}
        favorites={{}}
        onFavoriteToggle={onFavoriteToggle}
      />
    );

    // check if food basic report components renders
    expect(screen.getByText("Nutrients")).toBeInTheDocument();

    // check if food data renders
    expect(screen.getByText(foodReportData.description)).toBeInTheDocument();
  });
});
