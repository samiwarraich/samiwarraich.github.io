import { FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ResumeButtonProps {
  readonly href?: string;
}

export default function ResumeButton({
  href = siteConfig.links.resume,
}: ResumeButtonProps) {
  return (
    <div className="flex justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-full hover:scale-105 transition-transform duration-200 font-medium"
        aria-label="View Resume"
      >
        <FileText
          className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200"
          aria-hidden="true"
        />
        <span>View Resume</span>
      </a>
    </div>
  );
}
