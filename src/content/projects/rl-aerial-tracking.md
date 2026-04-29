---
title: RL Aerial-Target Tracking
status: shipped
role: Primary author
order: 6
stack: ["PyTorch", "Stable Baselines3", "OpenAI Gym", "AirSim", "ROS 2", "Gazebo", "Python"]
---

# RL Aerial-Target Tracking

End-to-end reinforcement-learning policy for tracking aerial targets.
Policies trained in PyTorch via Stable Baselines3 against an OpenAI Gym
environment wrapped around AirSim and Gazebo, with ROS&nbsp;2 as the
runtime bridge to the tracking platform. Beats classical PID baselines
by **5&times; at 10&nbsp;m/s** target velocity.

## What it does

The agent observes the relative state of a moving aerial target and
outputs continuous control commands to a tracking platform. The training
loop runs through a custom OpenAI Gym environment that drives AirSim
(for high-fidelity drone dynamics) and Gazebo (for ground-truth
physics), with Stable Baselines3 handling the PPO/SAC training. ROS&nbsp;2
is the bridge between the trained policy and the runtime tracker.

The headline result, **5&times; tracking-error reduction over tuned
PID at 10&nbsp;m/s target velocity**, is the operating point where PID
controllers start to break down because the linear gain assumptions
stop holding. The RL policy learns the nonlinear correction
implicitly.

## Stack

PyTorch (policy backbone), Stable Baselines3 (RL training algorithms),
OpenAI Gym (environment interface), AirSim (high-fidelity drone sim),
Gazebo (physics and ground-truth state), ROS&nbsp;2 (real-time
messaging between policy and platform), Python.

## Where it fits

This work was done in the ADAMS Lab alongside the
[IROS 2026 submission](/projects/iros-swarm). Where the swarm work
focuses on multi-agent coordination without a central coordinator,
this one focuses on the single-agent control problem: high-rate,
nonlinear, hard for hand-tuned controllers.

## Status

Shipped. **No public repository or paper yet.** Happy to walk through
the setup or share artifacts on request.
