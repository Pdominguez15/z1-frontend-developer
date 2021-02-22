import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CameraComponent } from "./camera.component";

describe("pods/camera/camera.component specs", () => {
  it("should display poor lighting information when it is render", () => {
    // Arrange
    const props = {
      isValid: false,
    };

    // Act
    render(<CameraComponent {...props} />);

    const h1Title = screen.getByRole("heading", { level: 1 });
    const paragraph = screen.getAllByRole("paragraph");
    const video = screen.getByRole("video");
    const image = screen.getByRole("img");
    const button = screen.getByRole("button");

    // Assert
    expect(h1Title).toHaveTextContent("Take picture");
    expect(paragraph[0]).toHaveTextContent(
      "Fit your ID card inside the frame."
    );
    expect(paragraph[1]).toHaveTextContent(
      "The picture will be taken automatically."
    );
    expect(paragraph[2]).toHaveTextContent("Room lighting is too low");
    expect(video).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should display accept information when it is render", () => {
    // Arrange
    const props = {
      isValid: true,
    };

    // Act
    render(<CameraComponent {...props} />);

    const h1Title = screen.getByRole("heading", { level: 1 });
    const paragraph = screen.getAllByRole("paragraph");
    const video = screen.getByRole("video");
    const image = screen.getByRole("img");

    // Assert
    expect(h1Title).toHaveTextContent("Take picture");
    expect(paragraph[0]).toHaveTextContent(
      "Fit your ID card inside the frame."
    );
    expect(paragraph[1]).toHaveTextContent(
      "The picture will be taken automatically."
    );
    expect(paragraph[2]).toHaveTextContent("Picture taken!");
    expect(video).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
