import { getDirectory } from "./get-directory";

describe("getDirectory", () => {
  it("should return the directory of a file", () => {
    const result = getDirectory("src/a/index.ts");

    expect(result).toBe("src/a");
  });

  it("should return a directory as-is", () => {
    const result = getDirectory("src/a");

    expect(result).toBe("src/a");
  });

  it("should return a directory with a trailing forward slash without the trailing slash", () => {
    const result = getDirectory("src/a/");

    expect(result).toBe("src/a");
  });

  it("should return a directory with a trailing back slash without the trailing slash", () => {
    const result = getDirectory("src\\a\\");

    expect(result).toBe("src/a");
  });

  it("should return '/' when given '/'", () => {
    const result = getDirectory("/");

    expect(result).toBe("/");
  });

  it("should return '/' when given '\\'", () => {
    const result = getDirectory("\\");

    expect(result).toBe("/");
  });

  it("should return '/' when given an empty string", () => {
    const result = getDirectory("");

    expect(result).toBe("/");
  });

  it("should return '/' when given '.'", () => {
    const result = getDirectory("");

    expect(result).toBe("/");
  });
});
