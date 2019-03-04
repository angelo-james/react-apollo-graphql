const express = require('express');
const graphqlHTTP = require('express-graphql');
const PORT = process.env.PORT || 3800;

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})