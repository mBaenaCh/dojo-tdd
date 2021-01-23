const app = require('./API/app');

app.listen( process.env.PORT || 3001, () => {
    console.log("Server running on port 3001");
});