---
title: SKiM
summary: Built the caching layer in Rust. 6× faster with 80% less memory.
tech: Rust
status: published
role: Systems developer, caching and concurrency
order: 1
stack: ["Rust", "Tokio", "rayon", "Direct I/O", "Minimal perfect hashing"]
results:
  - { value: "6×", label: "faster than baseline" }
  - { value: "−80%", label: "memory, 4 GB → 800 MB" }
  - { value: "63M", label: "keys in the benchmark" }
links:
  - { label: "GitLab", href: "https://gitlab.com/SCoRe-Group/SKiM" }
---

## Problem

SKiM identifies which microbes are in a DNA sample from an Oxford
Nanopore sequencer, and was published in *Bioinformatics* (2025). Its
reference database didn't fit in the memory of the small devices it was
built for, like NVIDIA Jetson boards.

## What I built

I built the caching layer. Every step was benchmarked before the next one:

1. Moved the database to SSD behind mmap, so it could run at all.
2. Switched to Direct I/O with a dedicated I/O thread pool, so rayon
   workers stop blocking on disk.
3. Deduplicated keys, so the same key is never fetched twice at once.
4. Replaced the hash map with minimal perfect hashing, removing per-key
   overhead across 63M keys.
5. Swapped in a non-blocking cache library. The old one's bounded channel
   left hundreds of threads waiting.

I also added a tunable cache page size for different storage devices, and
a watch mode that classifies files the moment the sequencer writes them.
