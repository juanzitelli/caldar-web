import { NextApiHandler } from "next";

const GetBoilers: NextApiHandler = async (req, res) => {
  const BOILERS_URL = `${process.env.NEXT_PUBLIC_CALDAR_API_URL}/boilers`;

  const response = await fetch(BOILERS_URL);

  const {
    payload: { list: boilers },
  } = await response.json();

  if (boilers) {
    return res.status(200).json({ boilers });
  }

  return res.status(400).json({ msg: "Error trying to fetch boilers" });
};

export default GetBoilers;
