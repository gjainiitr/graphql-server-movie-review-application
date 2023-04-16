const express = require('express');
const { loadSchemaSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');

const schema = loadSchemaSync('./schema.graphql', {
    loaders: [new GraphQLFileLoader()]
});

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
})

const port = 3000;
app.listen(port);