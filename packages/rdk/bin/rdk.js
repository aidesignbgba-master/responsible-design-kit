#!/usr/bin/env node

const [, , command, ...args] = process.argv;

if (!command || command === "help" || command === "--help" || command === "-h") {
  console.log("rdk — Responsible Design Kit CLI");
  console.log("");
  console.log("Usage:");
  console.log("  rdk init                 Scaffold a new project");
  console.log("  rdk add <skill>          Add a skill template (accessibility, user-centricity, gender-equity)");
  console.log("  rdk validate-skills      Validate .claude/skills/*/SKILL.md files");
  console.log("  rdk list-skills          Print parsed .claude/skills metadata as JSON");
  console.log("  rdk help                 Show this help");
  process.exit(0);
}

if (command === 'validate-skills') {
  require('./skill-validate');
  return;
}

if (command === 'list-skills') {
  require('./skill-load');
  return;
}

console.log(`Command "${command}" not yet implemented.`);
process.exit(1);
