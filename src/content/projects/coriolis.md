---
title: Coriolis
summary: Low-memory DNA classifier for edge devices. I built one subsystem.
tech: C++20
status: shipped
role: Contributor
order: 6
stack: ["C++20", "Intel TBB", "CMake", "x86 + ARM"]
links:
  - { label: "GitLab", href: "https://gitlab.com/SCoRe-Group/smarten/-/tree/master/coriolis" }
---

## Problem

Same goal as Coriolis-Lite, different approach: external-memory data
structures and an Intel TBB pipeline, so it stays efficient on Jetson-class
boards and still scales up to workstations.

## What I built

The `coriolis-ovw` subsystem. The rest of the classifier is the work of
other SCoRe Lab members.
