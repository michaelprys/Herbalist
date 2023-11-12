import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../src/assets/images');

async function main() {
    try {
        const convertedDecorative = await processImages(
            path.join(sourceDir, 'decorative')
        );
        const convertedContent = await processImages(
            path.join(sourceDir, 'content')
        );

        if (convertedDecorative || convertedContent) {
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
            const webpPath = path.join(dir, baseName + '.webp');
            const avifPath = path.join(dir, baseName + '.avif');

            try {
                // Check only for the /content folder
                if (dir.includes('content')) {
                    await fs.access(webpPath);
                    await fs.access(avifPath);
                } else if (dir.includes('decorative')) {
                    // Check only for the /decorative folder
                    await fs.access(webpPath);
                }
            } catch (err) {
                const sharpImage = sharp(filePath);

                // Convert to .webp for /decorative and /content
                if (dir.includes('content')) {
                    await sharpImage.webp().toFile(webpPath);
                } else if (dir.includes('decorative')) {
                    await sharpImage.webp().toFile(webpPath);
                }

                // Convert to .avif only for /content
                if (dir.includes('content')) {
                    await sharpImage.avif().toFile(avifPath);
                }

                converted = true;
            }
        }
    }

    return converted;
}

main();
