#!/bin/bash
npm i
node --version
deno --version
bun --version
for F in large_strings.*; do
	echo "$F"
	hyperfine -w 3 "node read.mjs $F" "deno run --allow-read read.ts $F" "bun run read.js $F"
done
