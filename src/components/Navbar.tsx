import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { SpotifyWidget } from "@/components/SpotifyWidget";

const SCROLL_THRESHOLD = 16 * 4;

const SOCIALS: { href: string; label: string; icon: IconName }[] = [
  { href: "https://github.com/el1f", label: "GitHub", icon: "github" },
];

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

interface NavbarProps {
  currentPath: string;
}

export function Navbar({ currentPath }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [direction, setDirection] = useState<"UP" | "DOWN">("DOWN");

  const onScroll = useCallback(() => {
    const y = window.scrollY;
    setDirection(y < lastScrollY ? "UP" : "DOWN");
    setLastScrollY(y);
    setScrollY(y);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const isStuck = scrollY > SCROLL_THRESHOLD;
  const isLogoActive = isStuck && direction === "DOWN";

  return (
    <header className="sticky top-0 z-50 w-full mt-16 py-4 print:hidden">
      <nav
        className={cn(
          "flex items-center justify-between h-20 w-full max-w-2xl pl-[1.125rem] pr-4 mx-auto transition-all duration-300 ease-out rounded-3xl border border-transparent",
          isStuck
            ? "backdrop-blur-xl bg-background/60 border-border shadow-lg"
            : "",
        )}
      >
        <a className="block h-12" href="/">
          <Logo isActive={isLogoActive} />
        </a>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap",
                  currentPath === href
                    ? "bg-muted text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {label}
              </a>
            ))}
          </div>

          <span className="hidden text-muted-foreground md:block">•</span>

          <div className="flex items-center">
            <SpotifyWidget />
            {SOCIALS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 transition-colors rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label={label}
              >
                <Icon name={icon} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
