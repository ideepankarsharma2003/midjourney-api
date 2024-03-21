require("dotenv").config();
// const { Midjourney } = require("../libs");
const { Midjourney } = require("midjourney");
/**
 *
 * a simple example of how to use the imagine command
 * ```
 * node example/imagine.js
 * ```
 */
async function main() {
  const client = new Midjourney({
    ServerId: process.env.SERVER_ID,
    ChannelId: process.env.CHANNEL_ID,
    SalaiToken: process.env.SALAI_TOKEN,
    Debug: true,
    Ws: true,
    SessionId: process.env.SALAI_TOKEN || "8bb7f5b79c7a49f7d0824ab4b8773a81",
  });
  await client.init();
  const msg = await client.Imagine('https://image.tmdb.org/t/p/original/yG8eiRj5M7JL4l8hmYQUGNRcpOG.jpg https://image.tmdb.org/t/p/original/eogRp6oAPK0SEvQmCrQ78LTlSdp.jpg https://image.tmdb.org/t/p/original/lU1ollblNqLSAof7fzvfiHSqb9C.jpg tom cruise in dress of ben 10 "mission immpossible" written on a banner in background  --iw 2 --v 6', (uri) => {
    console.log("loading", uri);
  });
  console.log({ msg });
}
main().catch((err) => {
  console.error(err);
  process.exit(1);
});



