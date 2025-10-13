import SocialLinks from "@/components/social-links";
import ResumeButton from "@/components/resume-button";
import Divider from "@/components/divider";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        <article className="space-y-12 animate-fade-in">
          {/* Name & Title */}
          <header className="space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                {siteConfig.name}
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                {siteConfig.title}
              </p>
            </div>
          </header>

          {/* Resume Link */}
          <ResumeButton />

          {/* Divider */}
          <Divider />

          {/* Social Links */}
          <SocialLinks />
        </article>
      </div>
    </main>
  );
}
