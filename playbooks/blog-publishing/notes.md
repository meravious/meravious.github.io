# Durable corrections

## 2026 11 21 Fresh notebook and GitHub rename

- Human request: remove all existing posts and post images while keeping the website; the new GitHub account username is meravious.
- Toolbox correction: removed the two published post files and seven source images, updated account URLs, and made homepage features optional. Empty Writing/home states replace hard-coded links to deleted posts. Feed and topic navigation are hidden until posts exist.
- Proof correction: checks read base_url from configuration, require the four core routes, validate zero-post states and reject stale account links. A first-push guide distinguishes GitHub account identity from Git commit author identity.
- Local records are excluded from Git so historical design comparisons and proof reports are not swept into the initial public push. The source archive created outside this project remains outside both the website and its Git repository.

## 2026 11 21 Preserve the preferred colors

- Human correction: "i like the old color more" after the journal redesign.
- Failed layer: process. The redesign coupled a layout improvement with an unnecessary palette change.
- Durable correction: restored charcoal #111514 and lime #bbef80 in shared CSS and favicon while preserving journal typography and layout. Updated design-brief.md and the proof checklist so generic anti-pattern advice cannot override this preference.
- Future rule: distinguish the user's feedback on color, layout and copy. Carry forward the parts the human likes.

## 2026 11 21 Applying the lab led direction

- User steering: "yes continue" after the lab-led journal recommendation was interpreted as selecting that direction; final visual acceptance remains with the human.
- Toolbox correction: replaced the active site layouts with the quiet dark journal. The shared note include uses h2 on archive/topic pages and h3 inside the homepage section. Archive warnings now require explicit per-post metadata rather than appearing on all future posts.
- Proof improvement: the generated-site checker now rejects skipped heading levels, leaked comparison pages and the retired marketing hero. Article/archive browser checks complement homepage inspection.
- Process correction: stop the live preview before a clean validation build or give serve a separate output directory. The two processes otherwise compete for public/ on Windows. The fresh build passed after the preview was paused.
- Version-specific lesson: Zola 0.23.6 child templates allow only inheritance/block/component declarations at top level. Put local set statements inside their content block.

## 2026 11 21 Generic visual identity

- Human correction: the design is appealing but still looks AI-generated.
- Failed layers: process and toolbox. The first pass used recognizable security styling without reviewing alternative layouts against the real writing.
- Durable correction: toolbox/design-brief.md records the actual audience, rejected patterns, two token/layout plans and pending human choice. Static design studies use the real posts and original diagram; the main templates remain unchanged until a direction is selected.
- Proof improvement: review actual content prominence and specific visual choices alongside build and accessibility checks. Passing technical checks does not establish good design.

## 2026 11 21 Zola template compatibility

- Defect: older Tera macro import syntax failed with Zola 0.23.6; the current taxonomy helper also uses `term`, not the older `name` argument.
- Layer: toolbox. Converted shared note markup to a reusable include, corrected helper arguments and pinned the generator version.
- Proof: fresh Zola build from original content succeeded after the correction. Keep the version-specific build check for future edits.
- Human acceptance: pending. No output is stored as an approved example.

## 2026 11 21 Mobile code block overflow

- Defect: the migrated Snort article expanded beyond a 390px viewport because the grid child inherited a long code block's minimum width.
- Layer: toolbox. Added an explicit zero minimum width to the article grid child and constrained code blocks to their container.
- Proof improvement: inspect actual document scroll width on mobile, including a long-code article; a homepage screenshot alone cannot establish responsive reading behavior.
