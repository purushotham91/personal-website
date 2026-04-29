---
title: Coriolis-Lite
status: shipped
role: Primary author
order: 2
stack: ["C++20", "sdsl-lite", "FM-Index", "DNAsbt", "CMake", "ARM + x86"]
---

# Coriolis-Lite

A lightweight C++20 metagenomic classifier: the FM-Index-backed sibling
of [Coriolis](/projects/coriolis). Built on
[sdsl-lite](https://github.com/simongog/sdsl-lite) for compressed succinct
indexing. Targets mobile and edge devices where RAM and storage are tight.
NSF-supported under award [CNS-1910193](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1910193).

## What it does

Coriolis-Lite classifies sequencing reads against a reference index of
microbial genomes. Input is FASTA / FASTQ; output is a per-read taxonomic
assignment in a Centrifuge-compatible format, so it can drop into
existing pipelines unchanged. The FM-Index gives O(m) substring queries
on a compressed representation of the reference, so the classifier fits
in dramatically less memory than suffix-array or hash-based alternatives.

## Why it exists

Most metagenomic classifiers assume a server-class machine with tens to
hundreds of GB of RAM. Coriolis-Lite targets the opposite end: phones,
NVIDIA Jetson-class boards, MinION-attached devices, where sending data
back to a server isn't an option. Memory efficiency is the primary
constraint; FM-Index over sdsl-lite is the right primitive because it
keeps the index in compressed succinct form while preserving fast
substring queries.

## Stack

C++20, sdsl-lite, libdivsufsort, Boost.Iostreams, LZ4, spdlog, DNAsbt.
CMake build. Linux, x86\_64 + ARM (Jetson via JetPack 5.x).

## Co-authors

Purushotham Sirasapalli (primary), Vatsal Labh, Chris Chen, Paridhi
Desai, Troy Richardson.

## Status

Shipped and in active use within the SCORE Lab metagenomics pipeline as
the FM-Index-based companion to Coriolis.

## Links

- [GitLab · Coriolis-Lite](https://gitlab.com/SCoRe-Group/smarten/-/tree/master/coriolis-lite)
- [NSF award CNS-1910193](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1910193)
