const { readFileSync, writeFileSync, readdirSync } = require("fs");
const sharp = require("sharp");
const crypto = require("crypto");

const template = `
  <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- head -->
    <!-- eyes -->
    <!-- hair -->
    <!-- nose -->
    <!-- mouth -->
    <!-- accessory -->
  </svg>
`;

function getLayer(dir, fileName) {
  const svg = readFileSync(`./layers/${dir}/${fileName}`, "utf-8");
  const re = /(?<=\<svg\s*[^>]*>)([\s\S]*?)(?=\<\/svg\>)/g
  const layer = svg.match(re)[0];
  return layer;
}

async function svgToPng(name) {
  const src = `./out/${name}.svg`;
  const dest = `./out/${name}.png`;
  const img = await sharp(src);
  const resized = await img.resize(1024);
  await resized.toFile(dest);
}

function getFileName(dir, index) {
  return readdirSync(`./layers/${dir}`)[index];
}
function randomNumber() {
  return Math.floor(Math.random() * (16000 - 1 + 1) + 1);
}
function determineIndexOfFile(randomNumber, dir) {
  return Math.floor(
    randomNumber / (16000 / readdirSync(`./layers/${dir}`).length)
  );
}

// meta data
function generateDna(size) {
  return crypto.randomBytes(size).toString("base64").slice(0, size);
}
// rarity
function determineRarity() {}

function createNft() {
  const types = ["head", "eyes", "hair", "nose", "mouth", "accessory"];
  const svg = types.reduce(
    (template, type) =>
      template.replace(
        `<!-- ${type} -->`,
        getLayer(
          type,
          getFileName(type, determineIndexOfFile(randomNumber(), type))
        )
      ),
    template
  );
  const dna = generateDna(8);
  writeFileSync(`./out/${dna}.svg`, svg);
  svgToPng(dna);
}

createNft();
