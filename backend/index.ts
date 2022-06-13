
import express, {Request as Req, Response as Res} from "express"

console.log('hello ts');
// learning link
// https://www.youtube.com/watch?v=1UcLoOD1lRM

const app = express();


app.route("*").all((req: Req, res: Res): Res => {
    return res.status(200).send('server ok');
});

const port =  3005;
app.listen(port, (): void => console.log(`Listening on port ${port}, Express`));