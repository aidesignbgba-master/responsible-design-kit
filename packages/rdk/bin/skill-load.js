#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..', '..');
const skillsDir = path.join(repoRoot, '.claude', 'skills');

function parseFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const yaml = match[1].trim();
  const meta = {};

  yaml.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    const [key, ...rest] = trimmed.split(':');
    if (!key) return;
    const value = rest.join(':').trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      const items = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
      meta[key.trim()] = items;
    } else {
      meta[key.trim()] = value.replace(/^['"]|['"]$/g, '');
    }
  });

  return meta;
}

function loadSkills() {
  if (!fs.existsSync(skillsDir)) {
    throw new Error(`Skills directory not found: ${skillsDir}`);
  }

  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  const skillFolders = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  if (skillFolders.length === 0) {
    throw new Error('No skill folders found under .claude/skills/');
  }

  return skillFolders.map((folderName) => {
    const skillPath = path.join(skillsDir, folderName, 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      throw new Error(`Missing file: ${path.relative(repoRoot, skillPath)}`);
    }

    const content = fs.readFileSync(skillPath, 'utf8');
    const meta = parseFrontMatter(content);
    if (!meta) {
      throw new Error(`Missing or invalid YAML front matter in ${folderName}/SKILL.md`);
    }

    return {
      folder: folderName,
      path: path.relative(repoRoot, skillPath),
      meta,
    };
  });
}

function main() {
  const args = process.argv.slice(2);
  let outPath = null;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--out' || arg === '-o') {
      outPath = args[i + 1];
      i += 1;
    }
  }

  const skills = loadSkills();
  const output = JSON.stringify(skills, null, 2);

  if (outPath) {
    fs.writeFileSync(outPath, output, 'utf8');
    console.log(`Saved ${skills.length} skills to ${outPath}`);
    return;
  }

  process.stdout.write(output);
}

main();
