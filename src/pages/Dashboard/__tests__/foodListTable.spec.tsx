import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import FoodListTable from "../FoodListTable";

describe("food list table", () => {
  it("should render food list table", () => {
    const pageChange = vi.fn();
    const rowClick = vi.fn();
    const onFavoriteToggle = vi.fn();
    const handleSearchInputChange = vi.fn();

    const foodListData = {
      totalHits: 424981,
      currentPage: 1,
      totalPages: 21250,
      foods: [
        {
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
        },
      ],
    };

    const page = {
      skip: 0,
      take: 20,
      query: "",
    };
    render(
      <FoodListTable
        foodListData={foodListData}
        isFetching={false}
        page={page}
        pageChange={pageChange}
        rowClick={rowClick}
        favorites={{}}
        onFavoriteToggle={onFavoriteToggle}
        handleSearchInputChange={handleSearchInputChange}
      />
    );

    // check if food table components renders
    expect(screen.getByText("ndbNumber")).toBeInTheDocument();

    // check if food record renders
    expect(
      screen.getByText(foodListData.foods[0].description)
    ).toBeInTheDocument();

    // check if row click works
    screen.getByText(foodListData.foods[0].description).click();
    expect(rowClick).toBeCalled();

    // check if page button click works
    screen.getByTitle("Go to the next page").click();
    expect(pageChange).toBeCalled();
  });
});
