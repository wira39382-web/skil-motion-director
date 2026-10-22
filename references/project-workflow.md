# Project workflow

Keep a project folder with index.html, assets/, project.json, sources.json for factual work, and review.md. Store a user-requested final bundle using the environment's artifact persistence mechanism. Do not require JSON input from the user.

project.json is a lightweight record, not a production engine or a validated schema unless one is implemented. Record project ID, version, topic, goal, audience, language, aspect, width, height, target duration, chosen family, visual thesis, style tokens, audio status, source IDs and approval statement/version. Do not invent approval. Record each beat with start/end estimates, narration, on-screen text, visual action, focal element, continuity, transition purpose, assets and evidence IDs.

Treat the approved script as authoritative. Derive displayed narration from the same text, or explicitly verify copies. If factual meaning changes, return for review; layout-only changes do not require script reapproval. New user instructions override defaults.

For explainers, plan voice by default and check capability before locking beats. Produce/measure narration, then adjust beats to phrasing using `references/audio-production.md` (linked directly from SKILL.md). If voice is unavailable, complete the script, sound cue sheet and animatic; label timing provisional and output as preview — narration pending. A silent final is appropriate when the user requests or explicitly accepts it; HTML alone does not imply that preference.

Preserve source assets and versions. Revision should be local to affected beats where feasible. For cross-chat handoff include all needed script, sources, assets, assumptions and pending decisions; do not rely on memory.

First project: establish a visual benchmark with a short representative sequence, then extend. Do not promise that a new skill alone guarantees professional output. A polished final animation requires visual inspection and user feedback.

## Production records

Add these lightweight fields to project.json; do not claim a schema exists merely because the fields are documented:
- `artDirection`: asset medium, focal subject, continuing motif, composition contrast, material/light, motion signature.
- `focalAssets`: narrative role, geometry/silhouette, distinctive detail, separable moving parts/changed states, interaction, provenance, and actual inspection status. Keep this short and proportionate; do not invent assets or inspection results.
- `audio`: required/default/explicitly silent; provider or supplied asset; voice/music/SFX status; measured duration; caption source; blocker if any.
- Each beat: `subjectAction`, `continuityFromPrevious`, `transitionReason`, `voiceCue`, `soundCue`, and `holdReason`. Use null where not relevant, not invented precision.
- `review`: static layout, live playback, audio listening, synchronization, offline assets, export status, with concrete evidence and outstanding defects.
- `deliveryState`: preview or final, with reason. A silent animatic with narration pending is preview; syntax-only validation does not mean motion/audio passed.

Keep the records proportionate and allow embedded metadata for single-file delivery. They support production, not a form the user must complete. During a skill-only revision, update the reusable rules; do not silently replace the user's previous film or publish a new one.
