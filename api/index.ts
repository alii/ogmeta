import { VercelRequest, VercelResponse } from "@vercel/node";
import { getHtml } from "../utils/template";
import { getScreenshot } from "../utils/pptr";
import { schema } from "../utils/schema";

const isDev = !process.env.AWS_REGION;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const result = schema.safeParse(req.query);

  if (!result.success) {
    res.status(400).end("INVALID_QUERY");
    return;
  }

  const { type, ...options } = result.data;

  const html = getHtml(options);
  const file = await getScreenshot(html, type, isDev);

  res
    .status(200)
    .setHeader("Content-Type", `image/${type}`)
    .setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=3600, max-age=3600`
    )
    .end(file);
}
