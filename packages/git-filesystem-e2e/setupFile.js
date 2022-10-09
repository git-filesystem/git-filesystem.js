// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");

const result = dotenv.config({ path: __dirname + "/.jest.env", debug: true });
