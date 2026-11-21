import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const output = path.resolve(process.argv[2] ?? 'public');
const configText = fs.readFileSync('zola.toml', 'utf8');
const base = configText.match(/^base_url\s*=\s*"([^"]+)"/m)?.[1];
assert.ok(base, 'Missing base_url in zola.toml');
const files = fs.readdirSync(output, { recursive: true }).filter(file => file.endsWith('.html'));
for (const required of ['index.html', 'posts/index.html', 'about/index.html', '404.html']) {
  assert.ok(fs.existsSync(path.join(output, required)), `Missing required page: ${required}`);
}
let links = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join(output, file), 'utf8');
  assert.match(html, /<html\b[^>]*\blang=(?:"en"|'en'|en)(?:\s|>)/, `${file}: language missing`);
  assert.match(html, /name=(?:"viewport"|'viewport'|viewport)(?:\s|>)/, `${file}: mobile viewport missing`);
  assert.match(html, /Content-Security-Policy/, `${file}: CSP missing`);
  assert.ok(!/meraviglioso8\.github\.io|github\.com\/Meraviglioso8/i.test(html), `${file}: stale account URL`);
  assert.ok(!/<script(?![^>]*\bsrc=)[^>]*>/i.test(html), `${file}: inline script found`);
  const headings = [...html.matchAll(/<h([1-6])\b/g)].map(match => Number(match[1]));
  assert.equal(headings.filter(level => level === 1).length, 1, `${file}: expected one primary heading`);
  let previous = 0;
  for (const level of headings) {
    assert.ok(level <= previous + 1, `${file}: heading level skipped from ${previous} to ${level}`);
    previous = level;
  }
  const current = new URL(file === 'index.html' ? '/' : '/' + file.replace(/index\.html$/, ''), base);
  for (const match of html.matchAll(/(?:href|src)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    const value = (match[1] ?? match[2] ?? match[3]).replaceAll('&amp;', '&');
    const url = new URL(value, current);
    if (url.origin !== base) continue; // Never fetch external article references.
    const relative = decodeURIComponent(url.pathname).replace(/^\//, '');
    let target = path.resolve(output, relative || 'index.html');
    assert.ok(target.startsWith(output + path.sep), `${file}: path escapes output`);
    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html');
    assert.ok(fs.existsSync(target), `${file}: broken local URL ${value}`);
    if (url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      const destination = fs.readFileSync(target, 'utf8');
      const ids = [...destination.matchAll(/\bid=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(item => item[1] ?? item[2] ?? item[3]);
      assert.ok(ids.includes(id), `${file}: missing fragment ${value}`);
    }
    links++;
  }
}
assert.ok(fs.existsSync(path.join(output, 'atom.xml')), 'RSS feed missing');
assert.ok(fs.existsSync(path.join(output, 'sitemap.xml')), 'Sitemap missing');
assert.ok(!fs.existsSync(path.join(output, 'design-study')), 'Unselected design studies must not ship');
const home = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
const postPages = files.filter(file => file.split(path.sep).join('/').startsWith('posts/') && file.split(path.sep).join('/') !== 'posts/index.html');
if (postPages.length === 0) {
  assert.match(home, /No posts yet\./, 'Empty homepage must explain the absence of posts');
  assert.match(fs.readFileSync(path.join(output, 'posts/index.html'), 'utf8'), /No posts yet\./, 'Empty Writing page must explain the absence of posts');
  assert.ok(!home.includes('data-note'), 'Empty homepage must not invent an article');
}
assert.ok(!/Understand the system|Find the weak point|THE SECURITY NOTEBOOK/.test(home), 'Retired marketing hero reintroduced');
console.log(`PASS: ${files.length} HTML pages; ${postPages.length} posts; ${links} local links/assets/fragments; feed, sitemap, CSP and account URLs.`);
