import { readdir, lstat } from "node:fs/promises";
import path from "node:path"

export async function walk(dir: string, filelist: string[] = []) {
    const files = await readdir(dir);

    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = await lstat(filepath);

        if (stat.isDirectory()) {
            filelist = await walk(filepath, filelist);
        } else {
            filelist.push(filepath);
        }
    }

    return filelist;
}
