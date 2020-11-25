
const FAVORITE_CITY = process.env.FAVORITE_CITY;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(FAVORITE_CITY);
    await sleep(5000);
  }
}

main();
