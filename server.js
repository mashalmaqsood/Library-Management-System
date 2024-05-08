const app = require("./index");
const port = process.env.PORT;
const { sequelize } = require("./src/db/models");

app.listen(port, async () => {
    console.log(
      `Library management system backend(server) listening at http://localhost:${port}`
    );
    await sequelize.authenticate();
    console.log("Database connected!");
  });