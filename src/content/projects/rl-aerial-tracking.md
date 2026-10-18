---
title: AI Drone Tracking
summary: A learned controller that keeps up with targets 5× faster than the old one.
tech: PyTorch
status: shipped
role: Primary author
order: 3
stack: ["PyTorch", "Stable-Baselines3", "OpenAI Gym", "Gazebo", "ROS 2", "Python"]
results:
  - { value: "5×", label: "faster targets than before" }
  - { value: "2 → 10 m/s", label: "target speed it can follow" }
---

## Problem

The lab's old controller (a standard PID loop) lost vision-based tracking of aerial targets above
2 m/s. Its linear gains stop holding at higher speeds.

## What I built

- A custom Gym environment around a Gazebo simulation.
- An RL policy, trained with Stable-Baselines3, that outputs continuous
  control commands and learns the nonlinear correction PID can't.
- A ROS 2 bridge that runs the trained policy on the tracking platform.

There's no public repository yet. I'm happy to walk through it on a call.
