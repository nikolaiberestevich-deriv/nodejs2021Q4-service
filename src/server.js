const { PORT } = require('./common/config');
const app = require('./app');
// for 1st commit
app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
