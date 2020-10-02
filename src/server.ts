import app from './controllers/app';

const PORT = process.env.PORT || 3033;

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});