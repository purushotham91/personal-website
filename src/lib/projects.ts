export const projectBlurb: Record<string, string> = {
  skimet:
    "Distributed metagenomic classifier aimed at privacy-preserving deployment. I built the C++23 gRPC server/client framework with an Intel TBB pipeline.",
  "coriolis-lite":
    "C++20 metagenomic classifier on the FM-Index, primary author. NSF-supported. Targets mobile and edge devices.",
  skim: "Memory-efficient ONT metagenomic classifier in Rust, published in Bioinformatics 2025. I built the external-memory caching subsystem: classifies against the full 17 GB Archaeal/Bacterial/Fungal/Viral NCBI reference DB in ~800 MB of RAM; 6× faster than mmap on Jetson.",
  coriolis:
    "Full metagenomic classifier with DNAsbt index + Intel TBB pipeline. I contributed to the coriolis-ovw subsystem.",
  "iros-swarm":
    "Hardware-software platform for evaluating multi-robot signal-source localization indoors. 4 TurtleBots + 50 sim agents. Submitted to IROS 2026.",
  "rl-aerial-tracking":
    "End-to-end RL policy in PyTorch + ROS 2 + Gazebo, 5× over PID baselines at 10 m/s target velocity.",
};

export const statusLabel: Record<string, string> = {
  "in-progress": "in progress",
  shipped: "shipped",
  published: "published",
  archived: "archived",
};

export const headlineStats: { value: string; label: string }[] = [
  { value: "17 GB → 800 MB", label: "in-memory DB → cached classifier RAM" },
  { value: "6×", label: "faster on Jetson vs mmap" },
  { value: "5×", label: "over PID at 10 m/s" },
  { value: "50", label: "agents in simulation" },
];
