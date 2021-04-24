import React from "react";
import PageHeader from "../PageHeader";
import {render} from "@testing-library/react";

describe("Page Header", () => {
  test("should render page header", () => {
    const {baseElement} = render(<PageHeader title="JK Electricals"/>);

    expect(baseElement).toMatchSnapshot();
  });
});
