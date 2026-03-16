"use client";

import { useState } from "react";
import { GlassModal } from "../src/components/glass-modal";
import {
  glassBackdrop,
  glassSurface,
  glassOverlay,
  glassInteractive,
  glassText,
  glassTransition,
  glassRadius,
  glassSpacing,
  glassPanelClasses,
} from "../src/tokens/glass-tokens";

/* ── Token preview data ───────────────────────────────────── */

const TOKEN_GROUPS = [
  { label: "Backdrop", tokens: glassBackdrop },
  { label: "Surface", tokens: glassSurface },
  { label: "Overlay", tokens: glassOverlay },
  { label: "Radius", tokens: glassRadius },
  { label: "Text", tokens: glassText },
  { label: "Interactive", tokens: glassInteractive },
  { label: "Transition", tokens: glassTransition },
  { label: "Spacing", tokens: glassSpacing },
];

/* ── Page ──────────────────────────────────────────────────── */

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<"sm" | "md" | "lg">("md");

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-24">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Wen&apos;s Design System
        </h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-xl">
          Liquid Glass components and tokens. A minimal, token-driven design
          system for glass-morphism UI.
        </p>
      </header>

      {/* Modal demo */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">GlassModal</h2>
        <p className="text-white/50 text-sm">
          Accessible modal with backdrop blur, keyboard dismiss, and three size
          variants.
        </p>
        <div className="flex gap-3">
          {(["sm", "md", "lg"] as const).map((s) => (
            <button
              key={s}
              onClick={() => {
                setModalSize(s);
                setModalOpen(true);
              }}
              className={`
                px-5 py-2.5 text-sm font-medium
                ${glassPanelClasses}
                ${glassInteractive.hoverBg}
                ${glassTransition.colors}
                cursor-pointer
              `}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Token preview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Tokens</h2>
        <p className="text-white/50 text-sm">
          All glass values live in{" "}
          <code className="text-white/80 font-mono">glass-tokens.ts</code>.
          Update once, propagate everywhere.
        </p>
        <div className="space-y-8">
          {TOKEN_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-3">
                {group.label}
              </h3>
              <div className="grid gap-2">
                {Object.entries(group.tokens).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between py-2 px-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-sm text-white/70 font-mono">
                      {key}
                    </span>
                    <span className="text-sm text-white/50 font-mono">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Used by */}
      <section className="space-y-4 pb-12">
        <h2 className="text-2xl font-semibold">Used by</h2>
        <div className="inline-flex items-center gap-3 py-3 px-5 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-lg font-semibold">Linora</span>
          <span className="text-sm text-white/40">
            AI-powered job fit analysis
          </span>
        </div>
      </section>

      {/* Modal instance */}
      <GlassModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Glass Modal"
        size={modalSize}
      >
        <div className="space-y-3">
          <p className="text-white/70 leading-relaxed">
            Size variant: <code className="text-white/90 font-mono text-sm">{modalSize}</code>
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70 text-xs font-mono">Esc</kbd> or
            click the backdrop to close.
          </p>
        </div>
      </GlassModal>
    </main>
  );
}
