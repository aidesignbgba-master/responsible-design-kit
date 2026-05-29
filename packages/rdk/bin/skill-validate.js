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

function validateSkill(folderName) {
  const skillPath = path.join(skillsDir, folderName, 'SKILL.md');
  const issues = [];

  if (!fs.existsSync(skillPath)) {
    issues.push(`Missing file: ${path.relative(repoRoot, skillPath)}`);
    return issues;
  }

  const content = fs.readFileSync(skillPath, 'utf8');
  const meta = parseFrontMatter(content);

  if (!meta) {
    issues.push('Missing or invalid YAML front matter. Expected `---` at the top and bottom.');
    return issues;
  }

  const requiredFields = ['name', 'description'];
  requiredFields.forEach((field) => {
    if (!meta[field] || meta[field].length === 0) {
      issues.push(`Missing required front matter field: ${field}`);
    }
  });

  if (meta.name && meta.name !== folderName) {
    issues.push(`Front matter name '${meta.name}' does not match folder name '${folderName}'.`);
  }

  if (meta.tags && !Array.isArray(meta.tags)) {
    issues.push('Field `tags` must be a YAML array, e.g. tags: [accessibility, a11y]');
  }

  return issues;
}

function main() {
  if (!fs.existsSync(skillsDir)) {
    console.error(`Skills directory not found: ${skillsDir}`);
    process.exit(1);
  }

  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  const skillFolders = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);

  if (skillFolders.length === 0) {
    console.error('No skill folders found under .claude/skills/');
    process.exit(1);
  }

  let hasErrors = false;
  console.log(`Validating ${skillFolders.length} skill(s) in .claude/skills/`);

  skillFolders.forEach((folderName) => {
    const issues = validateSkill(folderName);
    if (issues.length > 0) {
      hasErrors = true;
      console.log(`\n[ERROR] ${folderName}`);
      issues.forEach((issue) => {
        console.log(`  - ${issue}`);
      });
    } else {
      console.log(`[OK] ${folderName}`);
    }
  });

  if (hasErrors) {
    console.error('\nSkill validation failed. Fix the issues above.');
    process.exit(1);
  }

  console.log('\nAll skills are valid.');
}

main();
