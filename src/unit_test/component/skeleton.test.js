import React from "react";
import { render, screen } from "@testing-library/react";
import Skeleton from "../../components/skeleton";

test("renders skeleton with correct class names", () => {
  render(<Skeleton />);

  // Check if the skeleton elements with the correct class names are rendered
  const cardSkeleton = screen.getByTestId("card-skeleton");
  expect(cardSkeleton).toBeInTheDocument();

  const containerCardSkeletons = screen.getAllByTestId(
    "container-card-skeleton"
  );
  expect(containerCardSkeletons).toHaveLength(2);

  const cardImageSkeleton = screen.getByTestId("card-image-skeleton");
  expect(cardImageSkeleton).toBeInTheDocument();

  const displayNameSkeleton = screen.getByTestId("display-name-skeleton");
  expect(displayNameSkeleton).toBeInTheDocument();

  const informationSkeletons = screen.getAllByTestId("information-skeleton");
  expect(informationSkeletons).toHaveLength(2);
});
