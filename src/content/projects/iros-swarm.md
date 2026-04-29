---
title: IROS 2026 Submission
status: in-progress
role: Co-author
order: 3
stack: ["ROS 2", "Python", "PyTorch", "Gazebo", "TurtleBot4", "Bayesian Optimization", "Gaussian Processes"]
---

# IROS 2026 Submission

**"Systematic Hardware-Software Platform to Implement and Evaluate
Multi-Robot Signal-Source Localization in an Indoor Environment,"**
submitted to **IROS 2026**. Built in the ADAMS Lab at the University at
Buffalo.

## What the paper shows

We built a hardware-software platform for systematically evaluating
decentralized multi-robot signal-source localization indoors. Each
robot maintains a local Gaussian-Process surrogate of the signal
field and runs Bayesian Optimization locally to decide where to move;
agents share posterior updates with neighbors over a noisy
communication channel. The contribution is the integrated platform
(hardware, comms stack, software architecture, and evaluation
methodology) that lets the same algorithm be tested across RF, LoRa,
and WiFi signal modalities without rewriting the experiment each time.

We validated with **4 physical TurtleBots** in hardware and **50
agents in simulation**.

## My contribution

I led development of the decentralized swarm system: the distributed
inference pipeline (per-agent GP + BO with online posterior sharing),
the ROS&nbsp;2 stack the agents run on, and hardware bring-up on the
TurtleBots. I also contributed to the simulation harness used for the
50-agent runs.

## Stack

ROS&nbsp;2, Python, PyTorch, Gazebo for simulation, TurtleBot4
hardware. RF / LoRa / WiFi for the signal modalities.

## Links

- Paper: submitted to IROS 2026; link will be posted on acceptance.
