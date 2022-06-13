
import express from "express"

console.log('hello ts');
// learning link
// https://www.youtube.com/watch?v=1UcLoOD1lRM

const app = express();


app.route("*").all((req : any, res : any) => {
    return res.status(200).send('server ok');
});

const port =  3005;
app.listen(port, () => console.log(`Listening on port ${port}, Express`));