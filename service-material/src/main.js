const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 4000;

// Helmet
app.use(helmet())

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
const v1MaterialRoutes = require('./routes/v1/material.route');
const v1TypeRoutes = require('./routes/v1/type.route');

app.route('/').get((req, res) => {
    return res.json('ok!')
})

app.use('/v1/materials', v1MaterialRoutes) // Material Routes
app.use('/v1/material-types', v1TypeRoutes) // Material Types Routes

app.listen(port, () => {
    console.log(`App listening in the port ${port}`)
})