import { expect, it, describe } from "@jest/globals";
import { calculatePricing } from "./pricing";

describe("Return the cheapest rate for a given duration", () => {
  it("should return £60 for a booking length of 1440 minutes", () => {
    const result = calculatePricing(1440);
    expect(result).toBe(60);
  });

  it("should return £105 for a booking length of 2880 minutes", () => {
    const result = calculatePricing(2880);
    expect(result).toBe(105);
  });

  it("should return £210 for a booking length of 20160 minutes", () => {
    const result = calculatePricing(20160);
    expect(result).toBe(210);
  });
});

describe("Return an error message for an invalid booking length input", () => {
  it("should return an error message if the booking length is a string", () => {
    const result = calculatePricing("hello");
    expect(result).toBe("Error. Please enter the booking duration as a whole number.");
  });

  it("should return an error message if the booking length is a negative number", () => {
    const result = calculatePricing(-11);
    expect(result).toBe("Error. Please enter the booking duration as a whole number.");
  });

  it("should return an error message if the booking length is not an integer", () => {
    const result = calculatePricing(7980.35);
    expect(result).toBe("Error. Please enter the booking duration as a whole number.");
  });
});