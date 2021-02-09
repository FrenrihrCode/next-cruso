import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const DATA = await db.searchByName(req.query.name.toString());
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: DATA}));
};

export default allAvos;
