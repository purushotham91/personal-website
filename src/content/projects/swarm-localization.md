---
title: Decentralized Swarm Source Localization
status: shipped
role: Lead developer
order: 2
stack: ["ROS 2 Humble", "Python", "PyTorch", "Gazebo", "TurtleBot3", "Raspberry Pi 4", "LoRa", "Bayesian Optimization", "Gaussian Processes"]
---

# Decentralized Swarm Source Localization

A swarm of ground robots that finds a radio-frequency source with no
central coordinator. Each robot decides where to go next from its own
measurements plus what its neighbors share. Built in the ADAMS Lab at
the University at Buffalo.

## Results

- **4 physical TurtleBot3 robots**, validated with up to **50 simulated
  agents** in Gazebo.
- **83% mission success across 99 physical experiments.**
- Within mission time on **183 of 194** held-out simulated scenarios.
- On-robot inference cut from **3–4 minutes to a few seconds** on a
  Raspberry Pi 4.

## How it works

Each robot keeps a local Gaussian-Process model of the signal field and
runs Bayesian Optimization to pick its next waypoint. Robots share
posterior updates with neighbors over a noisy channel, so the swarm
converges on the source without any robot seeing the whole picture.

GP inference was the bottleneck: on a Raspberry Pi it took minutes per
step, which is useless for a moving robot. I trained a small neural
network that compresses raw sensor observations down to 100
representative points before they reach the GP. Accuracy held, and
inference dropped to a few seconds, which made real-time decentralized
tracking possible on the hardware we actually had.

## What I built

- The distributed inference pipeline: per-robot GP + BO with online
  posterior sharing.
- The ROS 2 Humble communication and sensor stack on TurtleBot3 +
  Raspberry Pi 4 (Ubuntu 22.04 Server), with Vicon 12-camera motion
  capture at 20 Hz for ground truth, decentralized waypoint planning, and
  collision avoidance.
- LoRa RF sensor integration (20 Hz, 868 MHz) with median-absolute-
  deviation and local-neighborhood filtering to tame noisy readings.
- The simulation harness used for the 50-agent runs.

## Related: hardware–software co-design

Building on the same platform, I designed a bi-level optimization that
tunes the swarm's search behavior and each UAV's hardware together
instead of one after the other. In 194 simulated avalanche-rescue
scenarios, the co-designed system finished missions **44% faster** than a
sequential design.

## Stack

ROS 2 Humble, Python, PyTorch, Gazebo, TurtleBot3, Raspberry Pi 4, LoRa,
Vicon motion capture.
