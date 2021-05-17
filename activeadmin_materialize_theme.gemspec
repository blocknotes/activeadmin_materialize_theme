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

  spec.files = Dir['{app,lib}/**/*', 'MIT-LICENSE', 'README.md']

  spec.add_runtime_dependency 'activeadmin', '~> 2.0'
  spec.add_runtime_dependency 'sassc', '~> 2.4'
end
