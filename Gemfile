source "https://rubygems.org"

ruby "3.2.1"

##-- Base Gems for Rails --##
gem "rails", "~> 7.1.2"
# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

##-- Hotwire & Frontend --##
gem "turbo-rails"
gem "stimulus-rails"
# Bundle and process CSS [https://github.com/rails/cssbundling-rails]
gem "cssbundling-rails"
# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
gem "jsbundling-rails"

##-- Sprockets --##
gem "sprockets-rails"

##-- Rails Application Helper Gems --##
gem "jbuilder"

##-- Gems for Database --##
gem "pg", "~> 1.1"
# Use Redis adapter to run Action Cable in production
gem "redis", ">= 4.0.1"

##--- Server & Infrastructure Configuration ---##
gem "puma", ">= 5.0"

##-- Platform Specific Gems --##
gem "tzinfo-data", platforms: %i[ windows jruby ]

group :development, :test do
  ##--- gems for debugging and error reporting ---##
  gem "debug", platforms: %i[ mri windows ]
end

group :development do
  ##--- gems for development ---##
  gem "web-console"
  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end
