---
title: SKiMet
status: in-progress
role: Primary author (gRPC server/client framework)
order: 5
stack: ["C++23", "gRPC", "Intel TBB", "SKiM", "CMake"]
---

# SKiMet

A distributed metagenomic classifier built on top of the SMARTEn
framework and integrating [SKiM](/projects/skim)'s compressed index
into a server/client architecture.

## Why it exists

The motivation behind SKiMet is **privacy-preserving classification**.
Sequencing data is sensitive: hospitals, field clinics, and personal
genomics workflows can't always send raw reads to a centralized
service. SKiMet is the foundation for a setup where the classification
service holds the reference index but never sees raw reads in
plaintext, while the client never has to host a 17&nbsp;GB reference DB
locally.

## My contribution

I built the **gRPC-based server/client framework**: the wire-protocol
contract, the connection lifecycle, the streaming interface for sending
reads to the server and receiving classifications back, and the
server-side pipeline that routes incoming requests through SKiM.

I have **not** worked on the privacy-preserving cryptographic layer
itself (homomorphic encryption, secure multiparty computation, or
similar). That's the next phase of the project; SKiMet today is the
network framework that the privacy layer will eventually live on top
of.

## What it does today

A client connects to the SKiMet server over gRPC and streams sequencing
reads. The server holds the SKiM compressed index in memory and runs
classification through an Intel TBB pipeline that overlaps I/O,
decompression, and lookup so a steady stream of client requests doesn't
stall on any one stage. Classifications stream back to the client as
they're produced.

The point is to decouple the classifier from the device that has the
sequencing data: the server holds the reference index, the client
holds the reads, and they exchange just enough over gRPC for
classification to happen. That makes SKiMet useful anywhere a client
machine can't reasonably host a 17&nbsp;GB reference DB locally.

## Stack

C++23, gRPC, Intel TBB, SKiM (as the index backend), CMake. Cross-platform.

## Status

In active development. The server/client framework and TBB pipeline
work end-to-end against the SKiM backend. The privacy-preserving layer
is open work, not yet started.

## Links

- [GitLab · SKiMet](https://gitlab.com/SCoRe-Group/smarten/-/tree/SKiMet/skimet)
