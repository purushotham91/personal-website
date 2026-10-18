// Single source of truth for resume facts shown on the site.
// Keep in sync with ~/job-search/career-ops/Purushotham_Sirasapalli.tex.

export const links = {
  email: "purusirasap@gmail.com",
  github: "https://github.com/purushotham91",
  gitlab: "https://gitlab.com/puru_s",
  linkedin: "https://linkedin.com/in/puru-sirasapalli",
  resume: "/resume.pdf",
};

export const impact: { value: string; label: string }[] = [
  { value: "6×", label: "faster cache, in Rust" },
  { value: "−80%", label: "RAM, 4 GB → 800 MB" },
  { value: "10 m/s", label: "RL tracking, 5× PID" },
  { value: "83%", label: "robot swarm success" },
];

export const work: { slug: string; title: string; line: string }[] = [
  { slug: "skim", title: "SKiM", line: "Rebuilt the caching layer in Rust. 6× faster, 80% less RAM." },
  { slug: "swarm-localization", title: "Robot swarm", line: "4 robots find a radio source with no central coordinator." },
  { slug: "rl-aerial-tracking", title: "RL aerial tracking", line: "Stable at 10 m/s, up from 2 m/s with PID." },
  { slug: "coriolis-lite", title: "Coriolis-Lite", line: "C++ DNA search on compressed indexes, for edge devices." },
];

export const experience: { title: string; org: string; dates: string }[] = [
  { title: "Software Engineer", org: "SCoRe Lab, University at Buffalo", dates: "2025 – 2026" },
  { title: "Research Assistant", org: "ADAMS Lab, University at Buffalo", dates: "2024 – 2026" },
  { title: "Student Manager", org: "3 Pillar Catering", dates: "2023 – 2026" },
  { title: "Software Engineering Intern", org: "Foundry Medical Technologies", dates: "2022" },
];

export const skills = ["C++", "Rust", "Python", "ROS 2", "PyTorch", "CUDA", "Linux", "AWS"];
