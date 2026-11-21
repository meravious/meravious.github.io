# Huyen Tran security engineering notebook

A static Markdown blog built with **Zola 0.23.6**, a Rust-based generator. Custom templates and local CSS replace Jekyll and Chirpy. There is no JavaScript framework, database, analytics, remote font, or third-party browser script.

The visual direction is a dark lab journal with the original charcoal/lime palette, plain author navigation and comfortable reading layouts. The notebook is starting fresh with no posts or post images. Search, topic links and RSS navigation appear once posts exist. The optional `extra.featured_post` selects a homepage feature; when blank or missing, the newest published post is used. Its image is optional. Local proof records and earlier comparison studies are kept under `records/`, excluded from Git and the published site.

## Local development

With Zola 0.23.6 on your PATH:

```powershell
zola serve --interface 127.0.0.1 --port 1111
```

For this workspace, the verified executable is `D:\codex\.tools\zola-0.23.6\zola.exe`. It is not a global installation or a tracked dependency. To install on another machine, use the official getzola release and verify its release digest; do not use arbitrary installer scripts.

```powershell
zola check --skip-external-links
zola build
node tools/check-site.mjs
```

Open `http://127.0.0.1:1111` while the development server is running. Generated files live in `public/` and are ignored by Git. Zola is written in Rust; this site uses its templates rather than implementing a custom Rust web server. No Rust toolchain is needed to write posts.

## Write a post

Use `playbooks/blog-publishing/toolbox/post-template.md` as a starting point and save a copy under `content/posts/your-slug.md`. Add the real date, description and topic, then write Markdown. Set `draft = true` for unpublished work; preview drafts with `zola serve --drafts`. Remove the draft flag only when the content is ready.

All previously migrated posts and their images have been removed at the user's request. No example post is published. Add new posts under `content/posts/`; the homepage and Writing page support a zero-post state.

Historical notices are opt-in: set `extra.archived = true` and `extra.archive_year = 2024` only on an actual archived post. New posts do not inherit an archive warning.

## Deployment

The GitHub workflow builds on pushes and pull requests. Deployment is **manual only**, through the workflow's Run workflow button on `main`. It uses GitHub Pages artifacts, not a generated-content branch. Enable Settings → Pages → GitHub Actions in the new repository first.

The site is configured for `https://meravious.github.io` and the GitHub profile `meravious`. See [first push instructions](docs/push-to-github.md). Update `base_url` if you choose a different domain. The local folder may keep its original name; it does not determine the GitHub account or published URL. No push or deployment has been performed.

## Maintenance and attribution

Follow `playbooks/blog-publishing/process.md`: produce the post and proof, incorporate corrections into process/toolbox/proof, then rerun. Human acceptance is not inferred from build success.

The original MIT license is retained in `LICENSE`. Git history removal does not remove attribution obligations. In this workspace, original non-Git source is archived outside the site at `D:\codex\records\meraviglioso8-original-source`; it is not deployed. Remote GitHub history is unaffected by resetting this local clone.
