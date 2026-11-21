# Blog design direction study

## Audience and job

Readers should find Huyen's technical notes, understand their scope and date, and read them comfortably. The user liked the initial design but found it visibly AI-generated. The lab-led direction is being applied across the site following the user's instruction to continue with the recommendation.

## Current failure

The original homepage spends too much space on a slogan, repeated uppercase labels, a synthetic network illustration and generic security branding. It looks more like a product pitch than a person's two-post blog.

## Personal notebook

- Palette: page #fcfcfe, text #252a34, links #294f9e, secondary text #576174, note background #edf1f9.
- Type: system Segoe UI/Arial, moderate headings, readable 16–20px text. This is an explicit no-download prototype choice, not a final custom font selection.
- Layout: left-aligned 808px content area; compact author navigation; short personal introduction; dates beside linked post titles.
- Principle: spend attention on actual writing, with no invented hero graphic or security theater.

```text
Name                         Writing About RSS
Introduction
Writing
Date   Linked title and short description
Date   Linked title and short description
Topic links
```

## Lab led journal

- Current palette, explicitly preferred by the user: charcoal page #111514, text #ecf0e9, secondary #a1aaa3, lines #303831, lime links/focus #bbef80, panel #171c19. Keep the original white background behind the real diagram. This supersedes the blue-grey prototype colors.
- Type: the same local font stack, with stronger article-title hierarchy and no monospace labels.
- Layout: author navigation; compact introduction; one real article beside its original diagram; the other post and a personal note below.
- Principle: give an actual artifact visual prominence, rather than decorate the page with a fabricated network model.

```text
Name                              Navigation
Introduction                      Short description
Snort article                     Actual lab diagram
Other post                        Personal note
```

## Review before building

A serif-on-cream replacement would merely swap one common AI aesthetic for another. Keep the restrained journal layout without terminal panels, decorative card grids, inflated claims or marketing calls to action. The user's preference for the original charcoal/lime colors takes precedence over generic advice against bright accents. The perceived generic quality came from the composition and copy, not a requirement to discard the palette.

Reference: Julia Evans's https://jvns.ca/ demonstrates immediate access to dated writing. This study borrows that structural lesson, not her identity or content. Design process informed by the public Anthropic frontend-design SKILL.md; no installer, runtime or hooks were installed.

## Human choice

The user said "yes continue" after the lab-led journal was recommended. This is interpreted as selection of that direction, not approval of every final detail. Apply the dark journal across article, topic and archive templates. Final visual acceptance remains pending. The studies are preserved under records/design-studies rather than shipped as public pages.

The user then said "i like the old color more". Preserve the journal layout and restore the original charcoal/lime palette. Do not interpret design criticism as rejection of every visual choice from an earlier version.
