import express  from 'express'
const app= express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});
//get  a list of 5 jokes in from of title and content
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            title: "Why don't skeletons fight each other?",
            content: "They don't have the guts!"
        },
        {
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        },
        {
            title: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});