import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../src/assets/images');

async function main() {
    try {
        const convertedContent = await processImages(sourceDir);

        if (convertedContent) {
            console.log('\x1b[32m- Images converted.');
        } else {
            console.log('\x1b[36m- Nothing to convert.');
        }
    } catch (err) {
        console.error('\x1b[31m- Error:', err);
    }
}

async function processImages(dir) {
    const files = await fs.readdir(dir);
    let converted = false;

    for (const file of files) {
        const filePath = path.join(dir, file);
        const isDirectory = (await fs.stat(filePath)).isDirectory();

        if (isDirectory) {
            const subConverted = await processImages(filePath);
            converted = converted || subConverted;
        } else if (/\.(jpe?g|png|bmp)$/.test(file)) {
            const baseName = path.basename(file, path.extname(file));
            const avifPath = path.join(dir, baseName + '.avif');

            try {
                if (sourceDir) {
                    await fs.access(avifPath);
                }
            } catch (err) {
                const sharpImage = sharp(filePath);
                if (sourceDir) {
                    await sharpImage.avif().toFile(avifPath);
                }
                converted = true;
            }
        }
    }
    return converted;
}

main();
