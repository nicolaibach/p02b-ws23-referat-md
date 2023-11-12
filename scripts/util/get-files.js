import {readdir} from 'node:fs/promises';

export const getFiles = async (root, ext) => {
	const files = await readdir(root, {withFileTypes: true});

	return files.filter(({name}) => name.endsWith(ext)).map(({name}) => name);
};
