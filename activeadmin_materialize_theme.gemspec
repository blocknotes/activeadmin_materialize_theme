# frozen_string_literal: true

$:.push File.expand_path('lib', __dir__)

# Maintain your gem's version:
require 'activeadmin_materialize_theme/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |spec|
  spec.name        = 'activeadmin_materialize_theme'
  spec.version     = ActiveadminMaterializeTheme::VERSION
  spec.authors     = ['Mattia Roccoberton']
  spec.email       = ['mat@blocknot.es']
  spec.homepage    = 'https://github.com/blocknotes/activeadmin_materialize_theme'
  spec.summary     = 'Active Admin Materialize Theme'
  spec.description = 'A theme for Active Admin based on Materialize framework.'
  spec.license     = 'MIT'

  spec.files = Dir['{app,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  spec.add_runtime_dependency 'activeadmin', '~> 2.0'

  spec.add_development_dependency 'activestorage', '~> 6.0'
  spec.add_development_dependency 'capybara', '~> 3.33'
  spec.add_development_dependency 'pry', '~> 0.13'
  spec.add_development_dependency 'puma', '~> 4.3'
  spec.add_development_dependency 'rspec_junit_formatter', '~> 0.4'
  spec.add_development_dependency 'rspec-rails', '~> 4.0'
  spec.add_development_dependency 'rubocop', '~> 0.90'
  spec.add_development_dependency 'sassc', '~> 2.4'
  spec.add_development_dependency 'selenium-webdriver', '~> 3.142'
  spec.add_development_dependency 'sprockets-rails', '~> 3.2'
  spec.add_development_dependency 'sqlite3', '~> 1.4'
end
