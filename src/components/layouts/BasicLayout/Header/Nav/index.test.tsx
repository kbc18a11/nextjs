import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import { Nav } from "./";

test.each([
  { url: "/my/posts", name: "My Posts" },
  { url: "/my/posts/123", name: "My Posts" },
  { url: "/my/posts/create", name: "Create Post" },
])("$url では $name がカレントになっている", ({ url, name }) => {
  mockRouter.setCurrentUrl(url);
  render(<Nav onCloseMenu={() => { }} />);
  const link = screen.getByRole("link", { name });
  expect(link).toHaveAttribute("aria-current", "page");
});
