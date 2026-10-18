---
title: SKiM
status: published
role: Systems developer (concurrency and caching)
order: 1
stack: ["Rust", "Tokio", "rayon", "minimal perfect hashing", "external-memory caching"]
---

# SKiM

A memory-efficient classifier that identifies which microbes are present
in a DNA sample sequenced on an Oxford Nanopore device. Published in
*Bioinformatics* (2025). Written in **Rust**.

## Results

- **6× faster** caching layer than the previous mmap-based design.
- **80% less RAM**: 4&nbsp;GB → 800&nbsp;MB on a 63M-key benchmark.
- Runs on resource-constrained hardware such as NVIDIA Jetson boards.

## My contribution

I own the **caching and concurrency subsystem**: the part that lets SKiM
classify against a large reference database on a machine with far less
RAM than the database needs.

I got there in steps, measuring after each one:

1. **Baseline.** Moved the database from RAM to SSD with mmap, so it
   could run at all on small machines.
2. **Direct I/O + an I/O thread pool**, so rayon worker threads stop
   blocking on disk reads.
3. **Key-level deduplication** so the same key is never fetched twice
   in flight.
4. **Minimal perfect hashing** in place of a standard hash map. On a
   63M-key reference database this removes per-key hash-table overhead
   entirely.
5. **Non-blocking cache library.** The cache crate we started with used
   a bounded channel that left hundreds of threads waiting; switching to
   a non-blocking cache library removed that bottleneck.

The end result is 6× faster than my own mmap baseline while using
roughly a fifth of the memory.

Other pieces I built:

- **Tunable cache page size** (`-p PAGE_SIZE`), so the on-disk layout can
  match the target device's storage (SSD, spinning disk, Jetson eMMC).
- **Watch-directory mode** (`-w` / `-t`): `skim-classify` picks up new
  FASTA/FASTQ files the moment the basecaller writes them, for a
  real-time pipeline from sequencer to result.
- Cross-platform builds on macOS, Linux, ARM, and x86.

## What SKiM is

SKiM = **S**hort **K**-mers **i**n **M**etagenomics. Most classifiers are
tuned for short, clean Illumina reads. SKiM uses short k-mers (DNA
substrings of length 15–16) plus statistical correction to handle long,
error-prone Nanopore reads accurately in a small memory envelope. Output
is Kraken2-compatible, so it drops into existing pipelines.

## Authors

- Trevor Schneggenburger: development, algorithm design
- **Purushotham Sirasapalli**: systems development, concurrency and caching
- Jaroslaw Zola: project design and supervision

SCoRe Research Group, University at Buffalo.

## Links

- [GitLab · SKiM](https://gitlab.com/SCoRe-Group/SKiM)
