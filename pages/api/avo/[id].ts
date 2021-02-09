import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const singleAvo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const DATA = await db.getById(req.query.id.toString());
  res.status(200).json(DATA);
};

export default singleAvo;
