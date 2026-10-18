---
title: Coriolis-Lite
summary: C++ DNA search on compressed indexes, built for phones and edge devices.
tech: C++20
status: shipped
role: Primary author
order: 4
stack: ["C++20", "sdsl-lite", "FM-index", "CMake", "x86 + ARM"]
links:
  - { label: "GitLab", href: "https://gitlab.com/SCoRe-Group/smarten/-/tree/master/coriolis-lite" }
  - { label: "NSF award", href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1910193" }
---

## Problem

Most DNA classifiers assume a server with tens of gigabytes of memory.
Coriolis-Lite targets phones and Jetson-class boards, where sending data
to a server isn't an option.

## What I built

- Exact-match search over an FM-index: a compressed text index that
  answers substring queries without decompressing (built on sdsl-lite).
- Output compatible with Centrifuge, so it drops into existing pipelines.
- Builds for x86 and ARM, including NVIDIA Jetson.

Supported by NSF award CNS-1910193.
