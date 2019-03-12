const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const PORT = process.env.PORT || 3800;
const schema = require('./schema');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})