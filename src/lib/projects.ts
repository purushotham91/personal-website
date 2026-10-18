export const projectBlurb: Record<string, string> = {
  skim: "Rust DNA classifier published in Bioinformatics (2025). I rebuilt its caching layer: 6× faster, 4 GB → 800 MB RAM on a 63M-key benchmark.",
  "swarm-localization":
    "Robot swarm that finds a radio source with no central coordinator. 4 physical TurtleBot3s + 50 simulated agents, 83% success over 99 physical runs.",
  "rl-aerial-tracking":
    "RL policy for vision-based aerial tracking. Stable at 10 m/s, up from 2 m/s with the previous PID controller.",
  "coriolis-lite":
    "C++20 exact-match search over compressed FM-indexes, so DNA classification fits on mobile and edge devices. Primary author.",
  skimet:
    "Distributed DNA classifier. I built the C++23 gRPC client/server framework and the Intel TBB pipeline that serves SKiM's index.",
  coriolis:
    "Low-memory DNA classifier for edge devices built on external-memory data structures. I contributed the coriolis-ovw subsystem.",
};

export const statusLabel: Record<string, string> = {
  "in-progress": "in progress",
  shipped: "shipped",
  published: "published",
  archived: "archived",
};
