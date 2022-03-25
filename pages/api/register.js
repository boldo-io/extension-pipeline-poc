const debug = require("debug")("frontend:api:register");
import { createUser } from "../../utils/auth";

const handler = async (req, res) => {
  try {
    const request = await createUser(req);
    if(request.ok) return res.status(200).end();
    res.status(request.status).json(await request.json());
  }
  catch(e) {
    debug(e);
    res.status(500).end();
  }
};

export default handler;