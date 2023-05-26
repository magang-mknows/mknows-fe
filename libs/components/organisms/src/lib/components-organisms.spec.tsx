import { render } from "@testing-library/react";

import ComponentsOrganisms from "./components-organisms";

describe("ComponentsOrganisms", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ComponentsOrganisms />);
    expect(baseElement).toBeTruthy();
  });
});
