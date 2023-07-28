import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../components/card";

// Sample data for testing
const sampleItem = {
  homepage: "https://example.com",
  avatar_url: "https://example.com/avatar.png",
  login: "example_user",
  name: "Example User",
  stargazers_count: 42,
  forks: 23,
  score: 10,
  type: "repository",
};

test("renders card with stargazers_count and forks", () => {
  render(<Card item={sampleItem} />);

  // Check if the component renders correctly
  expect(screen.getByAltText("avatar")).toBeInTheDocument();
  expect(screen.getByAltText("star")).toBeInTheDocument();
  expect(screen.getByText("42")).toBeInTheDocument();
  expect(screen.getByAltText("fork")).toBeInTheDocument();
  expect(screen.getByText("23")).toBeInTheDocument();
});

test("renders card with score and type", () => {
  // Modify the sampleItem to remove stargazers_count and forks
  const itemWithoutStargazers = {
    ...sampleItem,
    stargazers_count: undefined,
    forks: undefined,
  };
  render(<Card item={itemWithoutStargazers} />);

  // Check if the component renders correctly without stargazers_count and forks
  expect(screen.getByText("Score:")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
  expect(screen.getByText("Type:")).toBeInTheDocument();
  expect(screen.getByText("repository")).toBeInTheDocument();
});
