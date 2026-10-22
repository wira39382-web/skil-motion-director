# Motion choreography

## Design actions, not entrances

Write each beat as **subject → action/change → new understanding**. An entrance is staging, not the whole action. Example: a stream of investment splits, gathers around computing infrastructure, then narrows at an access barrier. A static chip with floating particles does not explain this mechanism.

Carry a meaningful object, shape, direction or focal position into the next beat where useful. Use shared-object transforms, a line becoming a chart, a deliberate match cut or a framing change. Reserve an obvious hard cut for a change in argument or a strong contrast. Do not force a morph between unrelated objects.

Compare two motion ideas internally; choose the one that explains the topic with fewer distractions. Create a recognizable motion signature for the project, not the same signature for every topic.

## Build a phrase

For each important action, stage preparation → action → settle → readable hold. Preparation and follow-through are options, not mandatory cartoon bounce. Overlap supporting actions slightly so the film does not repeatedly wait for every object to stop. Keep one dominant movement; do not animate every layer independently.

Use these as initial tuning ranges, not required values:

| Role | Starting range | Intent |
| --- | --- | --- |
| Small feedback/accent | 0.12–0.25 s | Confirm a change without distraction |
| Label/object reveal | 0.35–0.7 s | Resolve quickly into a readable state |
| Major transform/transition | 0.7–1.2 s | Let the viewer track the subject |
| Small supporting stagger | 0.04–0.09 s | Group related elements without a roll call |
| Deliberate emphasis/hold | Fit speech and reading | Let the important idea land |

Vary duration by distance, object scale and narrative weight. Avoid giving the same 0.75-second upward tween to every element. A slower movement is not automatically smoother.

Use deceleration for arrivals, acceleration for departures, and a shaped in-out curve for tracked transforms. Linear motion can suit a steady stream; it usually makes object entrances mechanical. Use small overshoot only for a fitting material or mood. Avoid overshooting charts or numbers in ways that misrepresent values. Preserve direction and velocity across adjacent movement where continuity is intended; do not restart a stopped tween every beat.

## Depth and camera

Arrange foreground, subject and background with distinct roles. Use restrained parallax, occlusion, shadow or perspective only when these clarify scale/space. A camera move must reveal, compare or follow something. Do not use perpetual wobble, arbitrary zoom, blur, or particles to disguise a static composition. Animate the subject rather than moving the entire page for every transition. Keep captions and source labels in screen space.

## GSAP implementation discipline

- Use one master playhead and nested timelines for actions; animate wrappers separately from inner artwork when transforms overlap.
- Set pre-entry visibility deliberately. `fromTo(..., immediateRender:false)` alone does not hide a future entrance. Check the first frame and reverse seeking so objects do not appear briefly before their cues.
- Use explicit positions/labels for overlap and cue alignment; avoid accumulating `setTimeout` or independent loops for narrative actions.
- Keep transform origins deliberate. For SVG path drawing, initialize actual path length; do not assume every path is 100 units. Draw paths in a direction that matches the story.
- Treat a chart's reveal as explanation: preserve labels, units and final values; never use random bars as evidence.
- Prefer transforms/opacity for repeated movement. Avoid huge live blur filters and layout-changing tweens when they cause stutter. Do not promise 60 fps without measuring.
- Derive decorative motion from timeline time and a stored seed. Seeking/restarting must not leave old particles, stale transforms or duplicate audio running.
- Respect reduced motion by removing nonessential spatial movement while preserving information and usable controls.

## Review actual movement

Review the representative 6–10 seconds at normal speed, including its boundary with adjacent beats. Look for abrupt starts/stops, competing focal points, motion with no explanatory purpose, and excessive waits. A contact sheet can verify layout but cannot prove smoothness. If playback is unavailable, record this limit and deliver a clearly identified preview rather than claiming motion approval.

## Repair a stiff result

Preserve verified content. Identify the dominant cause: repeated entrances, isolated scenes, mismatched speed, no subject action, or flat visual hierarchy. Fix that cause first. Replace at least the repeated pattern with a topic-specific continuous action; do not simply raise easing strength, add bounce everywhere, or lengthen all tweens.
