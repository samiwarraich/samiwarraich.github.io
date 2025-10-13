import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

interface SocialLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: siteConfig.links.github,
    icon: Github,
    label: "GitHub",
  },
  {
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: siteConfig.links.email,
    icon: Mail,
    label: "Email",
  },
] as const;

export default function SocialLinks() {
  return (
    <nav aria-label="Social media links">
      <ul className="flex justify-center gap-8">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          const isEmail = link.href.startsWith("mailto:");

          return (
            <li key={link.label}>
              <a
                href={link.href}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="group text-foreground/60 hover:text-foreground transition-colors duration-200"
                aria-label={link.label}
              >
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
