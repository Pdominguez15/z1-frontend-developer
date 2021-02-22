import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StartComponent } from "./start.component";

describe("pods/start/start.component specs", () => {
  it("should display information when it is render", () => {
    // Arrange
    const props = {
      onTakePicture: jest.fn(),
    };

    // Act
    render(<StartComponent {...props} />);

    const h1Title = screen.getByRole("heading", { level: 1 });
    const h2Title = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getByRole("paragraph");
    const image = screen.getByRole("img");
    const button = screen.getByRole("button");

    // Assert
    expect(h1Title).toHaveTextContent("BankClient");
    expect(h2Title).toHaveTextContent("Scan your ID");
    expect(paragraph).toHaveTextContent(
      "Take a picture. It may take time to validate your personal information."
    );
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should call onTakePicture property when it click on 'TAKE PICTURE' button", () => {
    // Arrange
    const props = {
      onTakePicture: jest.fn(),
    };

    // Act
    render(<StartComponent {...props} />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    waitFor(() => {
      expect(props.onTakePicture).toHaveBeenCalled();
    });
  });
});
