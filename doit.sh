#!/bin/bash
node --version
deno --version
bun --version
#for F in large_strings.*; do
for F in large_strings.numbers; do
	echo "$F"
	#hyperfine -w 3 "node read.mjs $F" "bun read.js $F" "bun read.cjs $F" "deno run --allow-read --unstable --compat read.ts $F"
	#hyperfine -w 3 "bun read.js $F" "node read.mjs $F" "deno run --allow-read --unstable --compat read.mjs $F"
	#hyperfine -w 3 "bun read.js $F" "deno run --allow-read read.ts $F"
	hyperfine -w 3 "bun read.js $F" "node read.mjs $F" "deno run --allow-read read.ts $F"
done
