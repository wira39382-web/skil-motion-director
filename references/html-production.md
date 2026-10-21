# HTML production

## Delivery modes
Default to a portable project folder: index.html + local assets/vendor. Prefer inline project CSS/JS; use local classic scripts or an explicitly documented local server for module-based builds. Do not silently promise file:// support for modules. A single HTML is useful only if assets actually travel with it or dependencies are disclosed.

Prefer local pinned JS/font dependencies where licensing and access permit. Audit network requests. If offline packaging is blocked, report which resources remain remote and offer the actual connected preview; do not evade proxy restrictions.

Expose a stable project interface, adapted from window.OPENER: W, H, DURATION, ready, seek(t), play(), pause(). Set ready only after required assets and fonts resolve. Handle failed assets visibly. Use one timeline as time authority. Seed pseudo-random setup with a stored constant and derive animation from timeline time. Test seeking forward and backward, repeated capture, final frame and restart.

## Starter adaptations required
Upstream templates contain sample content, fixed landscape coordinates, autoplay/loop behavior and CDN imports. Replace them intentionally. For portrait, adapt stage, camera center, layout, safe areas and text wrapping; changing width/height alone is insufficient.

Add accessible review controls: play/pause, restart, time scrub, audio toggle and captions toggle if used. Use keyboard focus and meaningful labels. Hide controls in clean mode. For blocked audio autoplay show a visible start button. Respect reduced motion by disabling nonessential camera shake/parallax without hiding the message.

Use static cut or simple animation when it improves clarity. Avoid flashing, excessive camera shake and motion blur that destroys readability. Subtitle is screen-space, outside the camera rig. Verify it does not collide with evidence labels or key objects.

## Voice and timing
TTS is not bundled. Check actual tools before proposing it. Use supplied audio or an available approved provider. Segment audio or align phrases with verified timing; silence detection is only a clue, not sentence recognition. The upstream browser RMS detector is not proven identical to FFmpeg. Inspect short phrases, quiet speech and trailing silence.

HTML audio is not captured by screenshot export. MP4 requires explicit audio muxing and duration checks. Never assume audio in the webpage implies audio in the MP4.

## Capture and encoding tools
Read runtime-tools.md for exact commands. snap.mjs and export-frames.mjs now share Playwright capture code with project-derived W/H, clean mode, asset/font readiness, error checks and browser cleanup. Default frame rate is 30. Full-frame export uses a fresh output folder to avoid stale frames. It still produces PNGs; encode.mjs is a separate optional encoding step with explicit audio input and metadata verification.

Capture success is not visual approval. The browser binary and Playwright are optional dependencies, and must be available. Do not install a large browser automatically if the environment already supplies a suitable verified capture tool. The offline SVG starter has no library/network dependency; original GSAP starters still require local packaging or network resources.

Run browser visual validation with the actual available supported tool; no requirement for one specific browser integration. If unavailable, report HTML authored but runtime/visual validation not performed. Do not equate static syntax checks with animation validation.
