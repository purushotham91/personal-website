---
title: Coriolis
status: shipped
role: Contributor (coriolis-ovw)
order: 6
stack: ["C++20", "DNAsbt", "Intel TBB", "CMake", "ARM + x86"]
---

# Coriolis

A fully-functional metagenomic classifier designed for lightweight mobile
devices: NVIDIA Nano-class boards, MinION-attached field setups. Like
Centrifuge, classification is based on exact-match queries of arbitrary
length over a reference index, but Coriolis is engineered for extremely
low-memory environments through optimized external-memory data
structures. Output is 100% Centrifuge-compatible, so Coriolis can drop
into existing workflows.

## My contribution

I contributed to the **`coriolis-ovw`** subsystem within the larger
Coriolis codebase. The full primary authorship belongs to others on the
SCORE Lab team; my work was scoped to that component.

## What Coriolis is

A C++20 classifier built on the DNAsbt index (distinct from the FM-Index
path used in [Coriolis-Lite](/projects/coriolis-lite)). It uses Intel TBB
for pipelined execution and is designed to remain efficient on Jetson-
class hardware while still scaling to workstation-class machines. Both
Intel and ARM are supported.

## Stack

C++20, DNAsbt, Intel TBB, Boost.Iostreams, LZ4, spdlog. CMake build.
Linux, x86\_64 + ARM.

## Status

Shipped. NSF-supported under award
[CNS-1910193](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1910193).

## Links

- [GitLab · Coriolis](https://gitlab.com/SCoRe-Group/smarten/-/tree/master/coriolis)
