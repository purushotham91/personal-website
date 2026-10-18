// Single source of truth for resume facts shown on the site.
// Keep in sync with ~/job-search/career-ops/Purushotham_Sirasapalli.tex.

export const links = {
  email: "purusirasap@gmail.com",
  github: "https://github.com/purushotham91",
  gitlab: "https://gitlab.com/puru_s",
  linkedin: "https://linkedin.com/in/puru-sirasapalli",
  resume: "/resume.pdf",
};

export const headline = "Software engineer for systems, robotics, and performance-critical code";

export const quickFacts: { label: string; value: string }[] = [
  { label: "Education", value: "B.S. Computer Science, Math minor · University at Buffalo '26" },
  { label: "Focus", value: "Systems · embedded · performance · robotics · ML infra" },
  { label: "Location", value: "Buffalo, NY · open to relocation or remote" },
];

export const impact: { value: string; label: string; context: string }[] = [
  { value: "6×", label: "faster caching layer", context: "SKiM, rebuilt in Rust, 63M-key benchmark" },
  { value: "80%", label: "less RAM", context: "4 GB → 800 MB on the same workload" },
  { value: "10 m/s", label: "stable aerial tracking", context: "RL policy, up from 2 m/s with PID" },
  { value: "83%", label: "source-localization success", context: "99 physical robot-swarm experiments" },
];

export interface Role {
  title: string;
  org: string;
  where: string;
  dates: string;
  bullets: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    title: "Software Engineer",
    org: "SCoRe Lab, University at Buffalo",
    where: "Buffalo, NY",
    dates: "Jan 2025 – May 2026",
    bullets: [
      "Rebuilt the caching layer of <a href=\"/projects/skim\">SKiM</a> in Rust with Tokio and rayon, streaming from SSD with key-level deduplication. Result: <strong>6× faster</strong> and <strong>80% less RAM</strong> (4 GB → 800 MB) on a 63M-key benchmark.",
      "Replaced SKiM's hash-based index with minimal perfect hashing, removing per-key hash-table overhead on a 63M-key reference database.",
      "Built <a href=\"/projects/coriolis-lite\">Coriolis-Lite</a>, a memory-efficient exact-match search engine in C++ that uses compressed FM-indexes to classify DNA sequences on mobile and edge devices.",
    ],
    tags: ["Rust", "C++", "Tokio", "rayon", "FM-index", "profiling"],
  },
  {
    title: "Undergraduate Research Assistant",
    org: "ADAMS Lab, University at Buffalo",
    where: "Buffalo, NY",
    dates: "Dec 2024 – May 2026",
    bullets: [
      "Built a <a href=\"/projects/swarm-localization\">decentralized robot swarm</a> that finds radio-frequency sources with no central coordinator. Deployed on <strong>4 physical TurtleBot3s</strong> (ROS 2 on Raspberry Pi 4) and validated with up to <strong>50 simulated agents</strong>.",
      "Bayesian-Optimization + Gaussian-Process inference pipeline located the source in <strong>83% of 99 physical runs</strong>, and within mission time on 183 of 194 held-out simulated scenarios.",
      "On-robot GP inference went from <strong>3–4 minutes to a few seconds</strong> after I added a small neural network that compresses sensor observations to 100 points without losing accuracy.",
      "Trained an <a href=\"/projects/rl-aerial-tracking\">RL policy</a> for vision-based aerial target tracking: stable tracking speed rose from 2 m/s to <strong>10 m/s</strong> over the prior PID controller.",
      "Designed a bi-level optimization that co-tunes swarm search behavior and UAV hardware; missions finished <strong>44% faster</strong> than a sequential design across 194 avalanche-rescue scenarios.",
    ],
    tags: ["ROS 2", "Python", "PyTorch", "Gaussian Processes", "RL", "Raspberry Pi"],
  },
  {
    title: "Software Engineering Intern",
    org: "Foundry Medical Technologies",
    where: "Visakhapatnam, India",
    dates: "Feb 2022 – May 2022",
    bullets: [
      "Implemented and validated embedded control logic for a medical ventilator across adult and pediatric modes, with mode-level hardware testing against safety and performance standards.",
    ],
    tags: ["Embedded C", "hardware testing", "safety-critical"],
  },
  {
    title: "Student Manager",
    org: "3 Pillar Catering, University at Buffalo",
    where: "Buffalo, NY",
    dates: "Aug 2023 – May 2026",
    bullets: [
      "Promoted from student staff. Led a team of 10+ students, running shift logistics and onboarding for events of up to 1,000 guests.",
    ],
    tags: ["leadership", "operations"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C/C++", "Rust", "Python", "Java", "JavaScript", "SQL"] },
  {
    group: "Systems & performance",
    items: ["Tokio", "rayon", "Intel TBB", "gRPC", "CUDA", "CMake", "Linux", "Docker", "Git"],
  },
  {
    group: "ML & robotics",
    items: ["PyTorch", "Stable-Baselines3", "OpenAI Gym", "scikit-learn", "NumPy", "ROS 2", "Gazebo"],
  },
  {
    group: "Data & cloud",
    items: ["Hadoop", "Spark", "AWS (EC2, S3, Lambda, IAM, CloudFormation, CloudWatch)"],
  },
];

// Constraint → bottleneck → fix → result. The way I approach every problem.
export interface CaseStudy {
  slug: string;
  title: string;
  constraint: string;
  bottleneck: string;
  fix: string;
  result: string;
  bars?: { label: string; before: number; after: number; beforeText: string; afterText: string; lowerIsBetter: boolean };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "skim",
    title: "SKiM caching layer",
    constraint: "Classify DNA against a reference database too big to fit in the RAM of an edge device.",
    bottleneck: "mmap paging stalled rayon workers on disk reads, the same keys were fetched repeatedly, and the hash map paid overhead on every one of 63M keys.",
    fix: "Direct I/O with a dedicated I/O pool, key-level dedup, minimal perfect hashing, and a non-blocking cache. Rust, Tokio, rayon.",
    result: "6× faster, 80% less RAM.",
    bars: { label: "Peak RAM", before: 4000, after: 800, beforeText: "4 GB", afterText: "800 MB", lowerIsBetter: true },
  },
  {
    slug: "swarm-localization",
    title: "On-robot GP inference",
    constraint: "Each robot in a decentralized swarm has to update its Gaussian-Process model on a Raspberry Pi 4 while it moves.",
    bottleneck: "GP inference scales badly with the number of observations: 3–4 minutes per update on the Pi.",
    fix: "A small neural network compresses raw observations to 100 representative points before the GP sees them.",
    result: "Minutes down to seconds, same accuracy. 83% success over 99 physical runs.",
    bars: { label: "Inference time", before: 210, after: 5, beforeText: "3–4 min", afterText: "seconds", lowerIsBetter: true },
  },
  {
    slug: "rl-aerial-tracking",
    title: "Aerial target tracking",
    constraint: "Track a fast-moving aerial target from vision alone.",
    bottleneck: "The PID controller's linear-gain assumptions break down past 2 m/s.",
    fix: "Trained an RL policy (PyTorch, Stable-Baselines3, Gazebo, ROS 2) that learns the nonlinear correction.",
    result: "Stable tracking at 10 m/s, 5× the previous limit.",
    bars: { label: "Stable speed", before: 2, after: 10, beforeText: "2 m/s", afterText: "10 m/s", lowerIsBetter: false },
  },
];

export const principles: { title: string; body: string }[] = [
  { title: "Measure first", body: "Profile before editing. A guess about the bottleneck is usually wrong, and an unmeasured win can't be defended." },
  { title: "Fix the data structure", body: "The biggest wins come from changing the layout or the algorithm, not from micro-tuning the hot loop." },
  { title: "Design for the real hardware", body: "Raspberry Pi, Jetson, a ventilator board. The constraint is the spec, so test on the device itself." },
  { title: "One change at a time", body: "Change one thing, benchmark it, keep it or revert it. That way every number on this page has a cause." },
];
