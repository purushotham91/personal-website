---
title: SKiMet
summary: gRPC client/server framework for a distributed DNA classifier.
tech: C++23
status: in-progress
role: Primary author, gRPC framework
order: 5
stack: ["C++23", "gRPC", "Intel TBB", "CMake"]
links:
  - { label: "GitLab", href: "https://gitlab.com/SCoRe-Group/smarten/-/tree/SKiMet/skimet" }
---

## Problem

The machine holding sequencing data often can't host a large reference
database, and medical data can't always leave the site. SKiMet splits the
work: a server holds the index, clients hold the reads.

## What I built

- The gRPC protocol, connection lifecycle, and streaming interface. Reads
  stream up, classifications stream back.
- A server pipeline on Intel TBB that overlaps I/O, decompression, and
  lookup, so steady traffic doesn't stall on any one stage.

The privacy-preserving encryption layer is planned future work. I haven't
worked on it.
