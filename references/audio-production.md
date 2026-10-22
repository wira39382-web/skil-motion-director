# Audio production

## Default and capability check

For informative explainers, plan an Indonesian voiceover by default. Use the user's requested language and vocal character when supplied; otherwise choose clear, natural, conversational delivery with deliberate emphasis and short pauses. Do not promise a particular commercial voice or clone a person's identity. For an opener/product film, decide whether voice or music/SFX best serves the brief; state the choice briefly. Explicit silent requests override these defaults.

Check available TTS/audio tools, supplied recordings, playback support and measurement tools before fixing the production plan. Read the actual provider's current instructions if one is available. Do not invent credentials, availability, costs, generated audio files or successful synthesis. Do not spend money or upload private scripts to an unapproved destination.

If TTS and a suitable recording are unavailable, complete the concept, narration script, cue sheet and useful visual animatic. State the missing capability early and mark it **preview — narration pending**. Request a recording or access to a suitable provider only when that is the remaining dependency. Do not label the silent result finished, infer consent to silence from “HTML,” or repeatedly ask the same question.

Browser `speechSynthesis` may be offered as an explicitly disclosed convenience demo when usable; voice availability, timing and offline behavior vary. It is not a substitute for an embedded, measured voice track and must not be presented as a reliably exportable narration. Music alone does not fulfill a requested explainer voiceover. A script or empty `<audio>` element is not audio production.

## Script and timing

Start from one authoritative script and source map. For a 45-second Indonesian explainer, roughly 85–105 spoken words is a useful first estimate with pauses, not a guarantee. Measure the real recording and shorten/rewrite before speeding up the voice. Keep on-screen headlines brief and let narration carry detail. Put pronunciation notes on names, acronyms, numbers and foreign terms into the synthesis/recording plan.

Generate or obtain a short sample first to check language, pronunciation and character; then produce the track. Align visual cues to meaningful phrases and pauses. Do not claim word-level alignment from approximate estimates or silence detection alone. Record duration and cue provenance: measured, provider alignment, manually checked, or estimated. If the requested duration is strict, leave room for a short opening/closing breath; do not truncate a sentence to hit the timer.

## Three layers, with restraint

1. **Voice:** primary information; intelligible over all other layers.
2. **Music/atmosphere:** optional support for mood and pacing, with a documented source/license. Do not use an unrelated loud loop merely to add sound.
3. **SFX:** sparse, purposeful accents on actions such as a connection, transform or reveal. Avoid a whoosh for every word and interface beep for every dot. Original procedural tones can supplement, but do not pretend they are a licensed music track or narration.

Mix and listen to representative passages including the densest moment and the end. Duck music around voice; avoid clipped peaks, jarring changes and a track cut off mid-phrase. For social-video delivery, around −16 to −14 LUFS integrated and no more than −1 dBTP can be starting targets when measurement is available; these are not universal platform requirements and do not replace listening. If sound is not audible to the agent, report only file/metadata checks, not an auditory pass.

## HTML playback and synchronization

Embed or package real audio with the project. Use a visible **Mulai dengan suara** action because browsers may block unmuted autoplay; start playback from that gesture and surface rejected `audio.play()` promises. Never start silent autoplay and hide the fact that the voice failed.

Keep a single timing authority. With an encoded narration track, prefer its current time as the playback clock and derive the GSAP timeline from it; an alternative shared transport must explicitly resynchronize. Seeking, pausing and restarting must affect visuals, narration and other sound layers together. Avoid two free-running clocks with no drift correction. On tab suspension pause the whole transport, then resume only deliberately. Expose mute/volume and captions controls; captions remain available when muted. Do not set `ready` before required audio metadata and fonts are available; handle failures visibly.

Web Audio effects should follow the same transport cues and clear scheduled sources on pause/seek/restart. File access and autoplay behavior need actual browser testing; do not promise offline audio until packaged assets and playback have been verified.

## Export and status

Screenshot/frame export does not capture HTML audio. For MP4, mux the actual mixed track, then check duration, channels, audible ending, and audio/video agreement. Keep asset origins and licenses with the project. Report voice, music and effects separately as produced/supplied/pending/omitted by design, and distinguish playback tested from metadata-only checked.
