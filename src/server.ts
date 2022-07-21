import { app } from "./app";

const PORT = 3030;

app.listen(PORT, () => {
  console.info(`App started on port ${PORT}`);
});
