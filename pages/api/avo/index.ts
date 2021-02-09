import { IncomingMessage, ServerResponse } from "http";
import DB from "@database";

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
  const db = new DB();
  const DATA = await db.getAll();
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.end(JSON.stringify({ data: DATA, length: DATA.length }));
};

export default allAvos;
