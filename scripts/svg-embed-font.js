import {readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';

import {getFiles} from './util/get-files.js';

const srcPath = 'src/_svg-raw';
const destPast = 'src/images';
const regex = /<style class="style-fonts">(.*?)<\/style>/s;

const fontDef = await readFile('src/fonts/virgil/font-def.txt');
const files = await getFiles(srcPath, '.svg');

for await (const file of files) {
	const src = path.join(srcPath, file);
	const dest = path.join(destPast, file);
	let text = await readFile(src, 'utf8');
	text = text.replace(regex, fontDef);
	await writeFile(dest, text, 'utf8');
	await rm(src);
	console.log(`${src} → ${dest}`);
}
