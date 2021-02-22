import * as React from "react";
import { render, screen } from "@testing-library/react";
import { HeaderComponent } from "./header.component";

describe("pods/header/header.component specs", () => {
  it("should display information when it is render", () => {
    // Arrange
    // Act
    render(<HeaderComponent />);

    const h1Title = screen.getByRole("heading", { level: 1 });
    const h2Title = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getByRole("paragraph");

    // Assert
    expect(h1Title).toHaveTextContent("BankClient");
    expect(h2Title).toHaveTextContent("Scan your ID");
    expect(paragraph).toHaveTextContent(
      "Take a picture. It may take time to validate your personal information."
    );
  });
});
