source "https://rubygems.org"

# Jekyll Core (using older version with better Sass support)
gem "jekyll", "~> 4.2.0"

# Use older sass-converter for better compatibility
gem "jekyll-sass-converter", "~> 2.2.0"

# Plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Platform-specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Required for Ruby 3.0+
gem "webrick", "~> 1.8"
