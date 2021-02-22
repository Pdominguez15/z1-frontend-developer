import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ResultComponent } from "./result.component";

describe("pods/result/result.component specs", () => {
  it("should display rejected information when it is render", () => {
    // Arrange
    const props = {
      onTakePicture: jest.fn(),
    };

    // Act
    render(<ResultComponent {...props} />);

    const h1Title = screen.getByRole("heading", { level: 1 });
    const h2Title = screen.getByRole("heading", { level: 2 });
    const paragraph = screen.getAllByRole("paragraph");
    const image = screen.getAllByRole("img");
    const button = screen.getByRole("button");

    // Assert
    expect(h1Title).toHaveTextContent("BankClient");
    expect(h2Title).toHaveTextContent("Scan your ID");
    expect(paragraph[0]).toHaveTextContent(
      "Take a picture. It may take time to validate your personal information."
    );
    expect(paragraph[1]).toHaveTextContent("REJECTED");
    expect(image).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it("should call onTakePicture property when it click on 'RETAKE PICTURE' button", () => {
    // Arrange
    const props = {
      onTakePicture: jest.fn(),
    };

    // Act
    render(<ResultComponent {...props} />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    waitFor(() => {
      expect(props.onTakePicture).toHaveBeenCalled();
    });
  });
});
