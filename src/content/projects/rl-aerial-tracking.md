---
title: RL Aerial-Target Tracking
status: shipped
role: Primary author
order: 3
stack: ["PyTorch", "Stable-Baselines3", "OpenAI Gym", "ROS 2", "Gazebo", "Python"]
---

# RL Aerial-Target Tracking

A reinforcement-learning policy for vision-based tracking of a moving
aerial target. It holds stable tracking at **10&nbsp;m/s**, up from
**2&nbsp;m/s** with the lab's previous PID-based controller: a **5×**
higher operating speed.

## What it does

The agent observes the relative state of a moving target and outputs
continuous control commands to the tracking platform. Training runs
through a custom OpenAI Gym environment around a Gazebo simulation, with
Stable-Baselines3 handling the training algorithms and ROS&nbsp;2 bridging
the trained policy to the runtime tracker.

## Why RL here

PID controllers work well near the speeds they were tuned for. As the
target speeds up, the linear-gain assumptions stop holding and tracking
falls apart; for our setup that happened around 2&nbsp;m/s. The RL policy
learns the nonlinear correction directly, which is what pushed the
stable operating point to 10&nbsp;m/s.

## Stack

PyTorch (policy network), Stable-Baselines3 (training), OpenAI Gym
(environment interface), Gazebo (physics), ROS&nbsp;2 (real-time
messaging between policy and platform), Python.

## Where it fits

Done in the ADAMS Lab alongside the
[swarm localization platform](/projects/swarm-localization). The swarm
work is about multi-agent coordination; this one is the single-agent
control problem: high-rate, nonlinear, and hard for hand-tuned
controllers.

## Status

Complete. No public repository yet. Happy to walk through the setup on a
call.
