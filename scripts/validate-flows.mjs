import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

async function yamlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? yamlFiles(path) : path.endsWith('.yaml') ? [path] : [];
  }));
  return nested.flat();
}

const files = await yamlFiles('.maestro/flows');
if (files.length === 0) throw new Error('No Maestro flows were found.');

for (const file of files) {
  const content = await readFile(file, 'utf8');
  for (const required of ['appId:', 'name:', '---']) {
    if (!content.includes(required)) throw new Error(`${file} is missing ${required}`);
  }
}

console.log(`Validated ${files.length} Maestro flows.`);
