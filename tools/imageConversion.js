import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../src/assets/images');

async function main() {
    try {
        const converted = await processImages(sourceDir);
        console.log(
            converted
                ? '\x1b[32m- Images converted.'
                : '\x1b[36m- Nothing to convert.'
        );
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
            const webpPath = path.join(dir, baseName + '.webp');
            const avifPath = path.join(dir, baseName + '.avif');

            try {
                await fs.access(webpPath);
                await fs.access(avifPath);
            } catch (err) {
                const sharpImage = sharp(filePath);

                await sharpImage.webp().toFile(webpPath);
                await sharpImage.avif().toFile(avifPath);

                converted = true;
            }
        }
    }

    return converted;
}

main();
