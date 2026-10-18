---
title: Swarm Source Localization
summary: Robots that find a radio source together, with no central coordinator.
tech: ROS 2
status: shipped
role: Lead developer
order: 2
stack: ["ROS 2 Humble", "Python", "PyTorch", "Gazebo", "TurtleBot3", "Raspberry Pi 4", "LoRa"]
results:
  - { value: "83%", label: "success, 99 real runs" }
  - { value: "4", label: "physical robots" }
  - { value: "50", label: "simulated agents" }
---

## Problem

Each robot decides where to move using only its own radio readings and
what nearby robots share. The model behind that decision, a Gaussian
Process, took 3–4 minutes per update on a Raspberry Pi 4. Far too slow
for a robot that's moving.

## What I built

- The per-robot inference pipeline: Gaussian Process + Bayesian
  Optimization, with updates shared between neighbors.
- A small neural network that compresses sensor data to 100 points before
  the Gaussian Process sees it. Updates went from minutes to seconds with
  no loss in accuracy.
- The ROS 2 stack on TurtleBot3 + Raspberry Pi 4: LoRa radio sensors,
  Vicon motion capture, waypoint planning, and collision avoidance.
- The simulation harness for the 50-agent runs.

On the same platform, I designed an optimization that tunes swarm behavior
and drone hardware together. It finished missions 44% faster than tuning
them one after the other, across 194 simulated avalanche-rescue scenarios.
