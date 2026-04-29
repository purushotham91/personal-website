---
title: SKiM
status: shipped
role: Contributor (concurrency and caching)
order: 1
stack: ["Rust", "Rayon", "external-memory caching", "ONT reads"]
---

# SKiM

A memory-efficient metagenomic classifier for Oxford Nanopore (ONT)
reads, published in *Bioinformatics* (2025). Written in **Rust**.
SKiM uses short k-mers (k=15 or k=16) plus statistical correction
to classify error-prone long reads against the full microbial
reference catalog inside a tight memory envelope.

## My contribution

I built the **concurrency and caching subsystem** that makes SKiM
run on resource-constrained hardware like NVIDIA Jetson.
The high-level goal: classify against a full microbial reference
DB (~17&nbsp;GB) on a device with one or two orders of magnitude
less RAM than the in-memory mode would need.

Specifically:

- **External-memory cache layer** (`skim-convert-db`,
  `skim-cache-classify`). The cached database lives on disk as a
  page-aligned header + RLE-compressed data file, and the classifier
  pages it in on demand instead of loading the full DB into RAM.
- **Tunable cache page size** (`-p PAGE_SIZE`) so the cache layout can
  be matched to the target storage device's page size. This
  measurably improves throughput on SSDs vs spinning disks vs Jetson's
  eMMC; the right value can be discovered from `getconf PAGE_SIZE` on
  the target.
- **Watch-directory mode** (`-w` / `-t`) for live classification.
  `skim-classify` watches an input directory and processes new FASTA /
  FASTQ files the moment a basecaller (e.g., `dorado`) writes them,
  giving an end-to-end real-time pipeline from sequencer to
  taxonomic call.
- **~800&nbsp;MB classification footprint.** With caching, SKiM
  classifies against the full Archaeal/Bacterial/Fungal/Viral NCBI
  reference in roughly 800&nbsp;MB of RAM, versus ~17&nbsp;GB for the
  in-memory mode.
- **6&times; speedup on Jetson** over the mmap-based baseline.
- **Cross-platform.** The cache subsystem builds cleanly on macOS,
  Linux, ARM, and x86.

## What SKiM is

SKiM = **S**hort **K**-mers **i**n **M**etagenomics. A Rust
implementation targeted at ONT (long, error-prone) reads. Most
metagenomic classifiers are tuned for short Illumina reads; SKiM
uses short k-mers and statistical correction to classify ONT data
accurately while staying drastically smaller in memory than the
alternatives.

The tool ships as a set of binaries covering the index-construction
and classification phases: `skim-build`, `skim-classify`,
`skim-cache-classify`, `skim-pairwise-distances`, `skim-order`,
`skim-convert-db`, `skim-file2taxid`. Output is Kraken2-compatible,
so SKiM drops into existing taxonomic-classification pipelines.

## Authors

- Trevor Schneggenburger: development, algorithms design
- **Purushotham Sirasapalli**: systems development, concurrency and caching
- Jaroslaw Zola: project design and supervision

SCoRe Research Group, University at Buffalo.

## Stack

Rust (Cargo, 1.88+), Rayon for parallelism
(`RAYON_NUM_THREADS`), HyperLogLog sketches for pairwise distances,
custom external-memory cache layer.

## Links

- [GitLab · SKiM](https://gitlab.com/SCoRe-Group/SKiM)
