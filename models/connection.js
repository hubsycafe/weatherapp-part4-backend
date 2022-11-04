const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://jeremy-lacapsule:rbq1bzd%40wek%40DMQ3dbq@cluster0.dajsxd5.mongodb.net/weatherapp";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
