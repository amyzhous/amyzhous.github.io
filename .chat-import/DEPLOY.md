# Deploying Amy's portfolio

## What's in this folder
- `index.html`: the whole site (chat view, classic view, case study pages). Self-contained.
- `og-image.png`: the link preview image for LinkedIn, Slack, iMessage.
- `DEPLOY.md`: this file.

Both files go in the ROOT of the site repo, side by side.

## Prompt to paste into Claude Code
Open Claude Code in the folder where you unzipped this, then paste:

> Deploy this portfolio to my GitHub Pages site amyzhous.github.io.
> 1. Clone (or open) my repo `amyzhous/amyzhous.github.io`.
> 2. Make a backup branch called `backup-old-site` from the current main branch and push it, so the old password-protected site is saved.
> 3. On main, replace the site's `index.html` with the `index.html` from this folder, and add `og-image.png` to the repo root. Remove any old files the new index.html no longer uses only if I confirm.
> 4. Commit with the message "New chat-style portfolio" and push to main.
> 5. Tell me when GitHub Pages has finished deploying and give me the live URL.
> Don't change anything inside index.html.

## If you use a custom domain later
In `index.html`, replace `https://amyzhous.github.io` (appears 3 times, in the og:image, og:url, and twitter:image tags) with your domain, e.g. `https://amyzhou.design`. Then add the domain in the repo's Settings → Pages.

## Before sharing the link
- Replace placeholder links: search `index.html` for `hello@example.com` (your email) and `href="#"` on Résumé and LinkedIn.
- Paste the live URL into a LinkedIn draft or a Slack DM to yourself to confirm the preview image shows.
- Open it on your phone.

## Notes
- Deploying replaces your current password-protected site. The backup branch keeps a copy.
- Direct links: `/#classic` opens the classic view, `/#project-files`, `/#ai-strategy`, `/#unified-submittals` open case studies.
