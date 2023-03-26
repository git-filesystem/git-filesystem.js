import { getDirectoryParts } from "../../src/lib/paths/get-directory-parts";

const prepareInput = (inputPath: string, useBackSlashes: boolean): string =>
  useBackSlashes ? inputPath.split("/").join("\\") : inputPath;

describe("getDirectoryParts", () => {
  [true, false].forEach(useBackSlashes =>
    describe(`using backslashes: ${useBackSlashes}`, () => {
      describe("file paths", () => {
        it("should return the directory parts of a file path", () => {
          const input = prepareInput("a/b/c.txt", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });

        it("should return the directory parts of a file path with a preceding slash", () => {
          const input = prepareInput("/a/b/c.txt", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });

        it("should return the directory parts of a file path with a drive", () => {
          const input = prepareInput("C:/a/b/c.txt", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });
      });

      describe("directory paths", () => {
        it("should return the directory parts of a directory path", () => {
          const input = prepareInput("a/b", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });

        it("should return the directory parts of a directory path with a preceding slash", () => {
          const input = prepareInput("/a/b", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });

        it("should return the directory parts of a directory path with a trailing slash", () => {
          const input = prepareInput("a/b/", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });

        it("should return the directory parts of a directory path with a drive", () => {
          const input = prepareInput("C:/a/b", useBackSlashes);

          const result = getDirectoryParts(input);

          expect(result).toEqual(["a", "b"]);
        });
      });
    })
  );
});
