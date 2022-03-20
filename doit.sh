#!/bin/bash
npm i
node --version
deno --version
for F in large_strings.*; do
	echo "$F"
	hyperfine -w 3 "node node_modules/xlsx-cli/bin/xlsx.njs --dev --all --read $F" "deno run --allow-read read.ts $F"
done
