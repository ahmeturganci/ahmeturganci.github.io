# 🅐🅤 Personal Website

> Today is a wonderful day to make a mistake.

My personal website and blog built with Jekyll and hosted on GitHub Pages.

## 🚀 Features

- **Responsive Design**: Works seamlessly on all devices
- **Blog Posts**: Share thoughts, tutorials, and experiences
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Math Support**: KaTeX integration for mathematical equations
- **Social Links**: Connect via Twitter, Instagram, GitHub, Spotify, and Medium
- **Timeline**: Professional experience and tech skills showcase
- **Interactive Travel Map**: Leaflet.js powered map showing visited Turkish provinces
- **SEO Optimized**: Jekyll SEO Tag plugin for better search engine visibility
- **Sitemap**: Automatic sitemap generation

## 🛠️ Tech Stack

- **Jekyll 4.2**: Static site generator
- **SASS**: CSS preprocessor for styling
- **KaTeX**: Math rendering
- **Leaflet.js**: Interactive maps
- **Font Awesome**: Icon library
- **GitHub Pages**: Hosting
- **Prettier**: Code formatting
- **Stylelint**: SCSS/CSS linting
- **HTMLHint**: HTML validation

## 📁 Project Structure

```
├── _config.yml           # Site configuration
├── _layouts/             # Page layouts
│   ├── default.html      # Base layout with SEO
│   ├── page.html         # Page layout
│   └── post.html         # Blog post layout
├── _includes/            # Reusable components
│   ├── menu.html         # Navigation menu
│   ├── meta.html         # Post metadata
│   ├── home.html         # Home page posts
│   └── timeline.html     # Experience timeline
├── _sass/                # Styles
│   ├── index.sass        # Variables and imports
│   ├── basic.sass        # Base styles
│   ├── layout.sass       # Layout styles
│   └── timeline.scss     # Timeline component styles
├── _posts/               # Blog posts
└── assets/               # Static assets (images, fonts, etc.)
```

## 🏃‍♂️ Local Development

### Prerequisites

- Ruby 3.0+ ([Install Ruby](https://www.ruby-lang.org/en/documentation/installation/))
- Bundler (`gem install bundler`)
- Node.js 18+ (optional, for linting and formatting)

### Setup

```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies (optional)
npm install
```

### Development Server

```bash
# Start Jekyll server with live reload
npm run dev

# Or using bundle directly
bundle exec jekyll serve --livereload
```

Visit `http://localhost:4000` to see your site.

### Build for Production

```bash
# Build optimized site
npm run build

# Or using bundle directly
JEKYLL_ENV=production bundle exec jekyll build
```

## 🎨 Code Quality

```bash
# Format all files
npm run format

# Check formatting
npm run format:check

# Lint HTML files
npm run lint:html

# Lint CSS/SASS files
npm run lint:css
```

## ✍️ Writing Posts

Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
description: "A brief description for SEO"
---

Your content here...
```

## 🔧 Customization

Edit `_config.yml` to customize:
- Site title, author, and description
- Base URL and timezone
- Navigation menu
- Social links
- Layout options

## 📦 Dependencies

### Ruby Gems
- `jekyll (~> 4.3.0)`: Core static site generator
- `jekyll-feed (~> 0.17)`: RSS feed generation
- `jekyll-seo-tag (~> 2.8)`: SEO optimization
- `jekyll-sitemap (~> 1.4)`: Sitemap generation
- `webrick (~> 1.8)`: Web server for Ruby 3.0+

### Node Packages (Development)
- `prettier`: Code formatting
- `htmlhint`: HTML validation
- `stylelint`: CSS/SCSS linting

## 📝 License

This project is licensed under the Unlicense - see [UNLICENSE.txt](UNLICENSE.txt)

## 👤 Author

**Ahmet Urgancı**
- GitHub: [@ahmeturganci](https://github.com/ahmeturganci)
- Twitter: [@aahmeturganci](https://twitter.com/aahmeturganci)
- Medium: [@ahmeturganci](https://ahmeturganci.medium.com/)

---

Made with ❤️ using Jekyll
