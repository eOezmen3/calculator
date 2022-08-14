import express, { Express, Request, Response } from "express"

import dotenv from "dotenv"
import mathExpressionParser from "math-expression-evaluator"

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const queryRegexp = /^[0-9*-/+\s()]+$/

app.get("/calculus", (req: Request, res: Response) => {
  const encodedQuery = Buffer.from(<String>req.query.query, "base64").toString(
    "utf-8"
  )

  if (!queryRegexp.test(encodedQuery)) {
    res.status(400).send("Invalid query parameter")
  } else {
    res.send({
      error: false,
      result: mathExpressionParser.eval(encodedQuery),
    })
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})

export const server = app
