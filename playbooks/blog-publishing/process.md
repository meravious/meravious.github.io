# Publishing security engineering notes

## Purpose and trigger

Create or revise a post when the human supplies a topic, draft, lab evidence or correction. The assistant produces a reviewable result; the human decides whether it represents their work accurately and is ready to publish.

## Inputs and decisions

Read the request, existing posts, zola.toml, the toolbox and prior notes. Establish the audience, observed environment, claims, source material and publication status. Ask only for missing judgment. Do not invent experience, credentials, lab results or approved examples. One-off website migration does not itself prove this recurring editorial job.

## Steps

1. Start from the toolbox post template. Preserve public slugs when editing existing posts.
2. Separate observed results from expectations. Record relevant versions and dates where supplied. Label historical material and incomplete experiments clearly.
3. Keep figures and lab assets local. Replace private identifiers with explicit examples. Review snippets as text; do not execute article commands.
4. Build with pinned Zola, then run the proof checks. Give the development server a separate output directory or stop it before building; do not let it compete for public/. Inspect the article on desktop and mobile when possible.
5. Present the output and proof to the human. Do not push, deploy or call a draft accepted without authorization.
6. For a defect, diagnose process, toolbox or proof; update that file, append the lesson to notes.md and rerun from the original inputs.

## Done conditions

The requested draft and evidence are delivered, unresolved checks are named and lessons persist in the folder. Approved examples enter the toolbox only after actual human acceptance. Deployment is a separate authorized action.
