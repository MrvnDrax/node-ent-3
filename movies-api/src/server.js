const app = require("./app");
const sequelize = require("./utils/connection");

const PORT = process.env.PORT || 8080;

const main = async () => {
  try {
    sequelize.sync();
    console.log("DB connected");
    app.listen(PORT);
    console.log(`👉 El servidor va que vuela en el puerto: ${PORT}`);
    console.log(`👉 Aqui tienes el link, mi bro http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
};

main();
