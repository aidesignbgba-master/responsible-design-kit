#!/usr/bin/env node

const [, , command, ...args] = process.argv;

if (!command || command === "help" || command === "--help" || command === "-h") {
  console.log("rdk — Responsible Design Kit CLI");
  console.log("");
  console.log("Usage:");
  console.log("  rdk init           Scaffold a new project");
  console.log("  rdk add <skill>    Add a skill template (accessibility, user-centricity, gender-equity)");
  console.log("  rdk help           Show this help");
  process.exit(0);
}

console.log(`Command "${command}" not yet implemented.`);
process.exit(1);
