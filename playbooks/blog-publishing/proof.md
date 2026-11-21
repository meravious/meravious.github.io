# Blog proof checklist

| Check | Failure condition | Evidence |
| --- | --- | --- |
| Source validity | Invalid front matter or missing internal reference | `zola check --skip-external-links` |
| Rendering | Templates fail with pinned Zola | `zola build` exit result |
| Local navigation | Missing route, asset, image or heading fragment | `node tools/check-site.mjs` |
| Browser behavior | Broken navigation, filtering, focus or narrow-screen layout | Desktop/mobile observations |
| Design consistency | Reintroduced slogan, decorative terminal panel or uppercase section labels; palette contradicts the user's explicit charcoal/lime preference | Compare homepage, writing, article, topics and About with toolbox/design-brief.md |
| Historical context | A new post inherits an inaccurate 2024 warning | Archive notices depend on explicit per-post archived and archive_year fields |
| Technical accuracy | Claims presented as observed without supplied evidence | Lab records, versions and primary references; explicitly unverified otherwise |
| Privacy | Credentials, private identifiers or invented personal claims | Inspect source and final post |
| Acceptance | Draft marked approved or published without the human decision | Actual user feedback and deployment record |

An older post's build success is not technical revalidation. A check prevented by missing context is unverified, not pass.
