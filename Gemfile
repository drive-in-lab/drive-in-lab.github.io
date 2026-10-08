source "https://rubygems.org"

# GitHub Pages builds with this gem, which pins Jekyll + all whitelisted
# plugins (jekyll-seo-tag, jekyll-sitemap, jekyll-feed, etc.) to versions
# that are guaranteed to work on GitHub Pages' own build servers.
gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Windows / JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
