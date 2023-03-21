#!/usr/bin/env node

import program from "commander";
import { concatTs } from "./index";

program
  .version("0.1.0")
  .option("-i, --input <path>", "Input entry path")
  .option("-o, --output <path>", "Output path")
  .parse(process.argv);

console.log(program.opts());

console.log(
  concatTs({
    input: program.input,
    output: program.output,
  })
);
