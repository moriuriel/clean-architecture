import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.post("/checkout", async function (req: Request, res: Response) {
	try {
		res.status(201).json(req.body);
	} catch (e: any) {
		res.status(422).json({
			message: e.message
		});
	}

});

app.listen(3000);