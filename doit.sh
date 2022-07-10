#!/bin/bash
node --version
deno --version
bun --version
#for F in large_strings.*; do
for F in large_strings.xlsx.xml; do
	echo "$F"
	hyperfine -w 3 "node read.mjs $F" "bun read.js $F" "bun read.cjs $F" "deno run --allow-read read.ts $F"
done
