import { ArrowLeftRight, Blocks, Building2, Gauge, Network, PenTool, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  siAlibabacloud,
  siBootstrap,
  siCodeigniter,
  siCoolify,
  siCss,
  siDigitalocean,
  siDirectus,
  siDocker,
  siExpress,
  siFigma,
  siFlutter,
  siGithubactions,
  siGit,
  siHtml5,
  siJavascript,
  siKotlin,
  siLaravel,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOdoo,
  siOpenapiinitiative,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPostman,
  siReact,
  siSap,
  siStripe,
  siTailwindcss,
  siVuedotjs,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

import { BrandIcon } from "@/src/components/icons/BrandIcon";
import type { TechStackName } from "@/src/data/tech-stack";

type BrandConfig = {
  kind: "brand";
  path: string;
  hex: string;
  title: string;
};

type LucideConfig = {
  kind: "lucide";
  icon: LucideIcon;
  hex: string;
  title: string;
};

type TechIconConfig = BrandConfig | LucideConfig;

const awsIcon: BrandConfig = {
  kind: "brand",
  title: "Amazon Web Services",
  hex: "FF9900",
  path: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.32.24.432a.948.948 0 0 0 .352.24c.16.064.352.096.576.096.368 0 .656-.096.864-.288a.903.903 0 0 0 .32-.72 1.08 1.08 0 0 0-.112-.496 1.19 1.19 0 0 0-.32-.384 2.85 2.85 0 0 0-.512-.32 10.446 10.446 0 0 0-.72-.288 12.715 12.715 0 0 1-.72-.304 3.442 3.442 0 0 1-.512-.336 1.442 1.442 0 0 1-.352-.416 1.225 1.225 0 0 1-.128-.576 1.35 1.35 0 0 1 .176-.688 1.473 1.473 0 0 1 .48-.464q.305-.176.72-.176.304 0 .528.08.224.08.384.224a.902.902 0 0 1 .24.352 1.19 1.19 0 0 1 .08.448h1.584a2.66 2.66 0 0 0-.16-.8 2.186 2.186 0 0 0-.48-.72 2.274 2.274 0 0 0-.784-.496 3.292 3.292 0 0 0-1.088-.16 3.32 3.32 0 0 0-1.232.224 2.816 2.816 0 0 0-1.52 1.52 2.72 2.72 0 0 0-.224 1.112M11.203 13.16a3.443 3.443 0 0 0 1.008-.64 2.825 2.825 0 0 0 .656-.928 3.058 3.058 0 0 0 .24-1.184 2.79 2.79 0 0 0-.24-1.168 2.665 2.665 0 0 0-.672-.928 3.116 3.116 0 0 0-1.008-.608 3.948 3.948 0 0 0-1.296-.208 3.876 3.876 0 0 0-1.264.208 3.006 3.006 0 0 0-1.984 1.536 2.916 2.916 0 0 0-.24 1.168q0 .672.24 1.184a2.75 2.75 0 0 0 .672.928q.42.384 1.008.608.59.225 1.296.224.701 0 1.264-.208M16.044 13.008q.576 0 .992-.224a1.637 1.637 0 0 0 1.072-1.504h-1.408a.632.632 0 0 1-.224.352.7.7 0 0 1-.432.128.8.8 0 0 1-.384-.08.685.685 0 0 1-.24-.24.825.825 0 0 1-.144-.384 1.363 1.363 0 0 1 .192-1.04 1.083 1.083 0 0 1 .288-.272.75.75 0 0 1 .4-.096.7.7 0 0 1 .4.112.55.55 0 0 1 .256.288.8.8 0 0 1 .096.384h1.424a1.7 1.7 0 0 0-.192-.768 1.738 1.738 0 0 0-.512-.608 2.34 2.34 0 0 0-.8-.4 3.634 3.634 0 0 0-1.04-.144 2.92 2.92 0 0 0-1.264.272 2.778 2.778 0 0 0-.992.752 3.49 3.49 0 0 0-.608 1.136 4.1 4.1 0 0 0-.208 1.312 3.4 3.4 0 0 0 .208 1.264 2.9 2.9 0 0 0 .608 1.008 2.9 2.9 0 0 0 .992.672 3.376 3.376 0 0 0 1.28.24zM0 18.948C4.128 21.63 9.096 24 14.016 24c4.608 0 7.392-2.208 7.392-5.808 0-3.744-2.832-5.088-7.92-6.672C9.024 10.464 6 9.648 6 6.912 6 4.56 7.92 3.12 11.472 3.12c2.928 0 5.04.672 6.576 1.44l.96-2.88C16.896.72 14.352 0 11.472 0 6.816 0 3.696 2.448 3.696 6.192c0 3.84 2.928 5.088 8.112 6.768 5.136 1.632 7.44 2.688 7.44 5.712 0 2.592-2.016 4.32-6.192 4.32-3.168 0-6.144-1.056-8.016-2.304z",
};

function brand(icon: SimpleIcon): BrandConfig {
  return {
    kind: "brand",
    path: icon.path,
    hex: icon.hex,
    title: icon.title,
  };
}

const techIconMap: Record<TechStackName, TechIconConfig> = {
  PHP: brand(siPhp),
  Laravel: brand(siLaravel),
  CodeIgniter: brand(siCodeigniter),
  "Node.js": brand(siNodedotjs),
  "Express.js": brand(siExpress),
  JavaScript: brand(siJavascript),
  "Vue.js": brand(siVuedotjs),
  "React.js": brand(siReact),
  "Next.js": brand(siNextdotjs),
  Flutter: brand(siFlutter),
  Java: {
    kind: "brand",
    path: siOpenjdk.path,
    hex: siOpenjdk.hex,
    title: "Java",
  },
  Kotlin: brand(siKotlin),
  "RESTful API": brand(siOpenapiinitiative),
  "Third-party Integration": {
    kind: "lucide",
    icon: Plug,
    hex: "7C3AED",
    title: "Third-party Integration",
  },
  "Payment Integration": brand(siStripe),
  "End-to-End Integration": {
    kind: "lucide",
    icon: ArrowLeftRight,
    hex: "0D9488",
    title: "End-to-End Integration",
  },
  HTML: brand(siHtml5),
  CSS: brand(siCss),
  Bootstrap: brand(siBootstrap),
  "Tailwind CSS": brand(siTailwindcss),
  Figma: brand(siFigma),
  "UI/UX": {
    kind: "lucide",
    icon: PenTool,
    hex: "A855F7",
    title: "UI/UX",
  },
  Odoo: brand(siOdoo),
  ERP: {
    kind: "lucide",
    icon: Building2,
    hex: "0F766E",
    title: "ERP",
  },
  SAP: brand(siSap),
  "Custom ERP modules": {
    kind: "lucide",
    icon: Blocks,
    hex: "B45309",
    title: "Custom ERP modules",
  },
  MySQL: brand(siMysql),
  PostgreSQL: brand(siPostgresql),
  "SQL Optimization": {
    kind: "lucide",
    icon: Gauge,
    hex: "00758F",
    title: "SQL Optimization",
  },
  "Stored Procedures": {
    kind: "brand",
    path: siPostgresql.path,
    hex: "336791",
    title: "Stored Procedures",
  },
  "ERD Design": {
    kind: "lucide",
    icon: Network,
    hex: "EA580C",
    title: "ERD Design",
  },
  AWS: awsIcon,
  "Alibaba Cloud": brand(siAlibabacloud),
  DigitalOcean: brand(siDigitalocean),
  Docker: brand(siDocker),
  "CI/CD": brand(siGithubactions),
  Git: brand(siGit),
  Postman: brand(siPostman),
  Directus: brand(siDirectus),
  Coolify: brand(siCoolify),
};

interface TechStackIconProps {
  name: TechStackName;
  className?: string;
}

export function TechStackIcon({ name, className = "h-4 w-4" }: TechStackIconProps) {
  const config = techIconMap[name];
  const needsContrast = config.hex.toUpperCase() === "F7DF1E";

  if (config.kind === "brand") {
    return (
      <BrandIcon
        path={config.path}
        hex={config.hex}
        title={config.title}
        className={[className, needsContrast ? "drop-shadow-[0_0_0.35px_rgba(15,23,42,0.45)]" : ""].join(" ")}
      />
    );
  }

  const Icon = config.icon;

  return (
    <Icon
      className={className}
      style={{ color: `#${config.hex}` }}
      aria-label={config.title}
      strokeWidth={2}
    />
  );
}
