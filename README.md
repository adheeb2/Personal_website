# 🌐 Adheeb's Personal Terminal Website

A terminal-styled personal website—minimal, customizable, and powered by Next.js. This site is where I mix code, stories, and a bit of noir flavor into one digital space.

I forked and customized the original LiveTerm project to make it my own. Now it runs as my **portfolio + playground + narrative hub**, all rolled into one.

## 📸 Showcase

## 🚀 Run Locally in Minutes

This project uses **yarn** as the package manager. If you don't have it yet, grab it [here](https://yarnpkg.com/).

Clone the repo and start the dev server:

```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
yarn install && yarn dev
```

Your site should now be live at `http://localhost:3000` 🎉

## 📄 Configuration

Most of the site is configured through `config.json`.

Example snippet:

```javascript
{
  "readmeUrl": "https://github.com/yourusername/personal-website",
  "title": "Adheeb Anvar",
  "name": "Adheeb",
  "ascii": "ascii-art-here",
  "social": {
    "github": "yourhandle",
    "linkedin": "yourhandle"
  },
  "email": "your@email.com",
  "ps1_hostname": "adheeb.dev",
  "ps1_username": "visitor",
  "resume_url": "./resume.pdf",
  "non_terminal_url": "https://yourdomain.com",
  "colors": {
    "dark": { ... },
    "light": { ... }
  }
}
```

You can easily tweak:

- **ASCII art** (appears at startup)
- **Social links**
- **Resume path**
- **Color themes**

## 🎨 Themes & Style

Predefined themes are included in `themes.json`. Swap them in `config.json` or create your own for a unique vibe.

Favicons live in `public/` — I recommend generating your own via [favicon-generator](https://favicon.io/).

## 🌐 Deploy

The easiest way: deploy on [Vercel](https://vercel.com/).

Options:

- Use the `vercel` CLI and run `vercel` inside your project.
- Or connect your GitHub repo directly—Vercel will auto-build and deploy on push.

## ✨ Credits

- Original template: [LiveTerm](https://github.com/Cveinnt/LiveTerm) by Cveinnt
- Inspired by [M4TT72's Terminal](https://github.com/m4tt72/terminal)

---
