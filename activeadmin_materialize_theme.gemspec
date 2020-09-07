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
  spec.homepage    = 'https://blocknot.es'
  spec.summary     = 'Active Admin Materialize Theme'
  spec.description = 'A theme for Active Admin based on Materialize framework.'
  spec.license     = 'MIT'

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    # spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise 'RubyGems 2.0 or newer is required to protect against public gem pushes.'
  end

  spec.files = Dir['{app,lib}/**/*', 'MIT-LICENSE', 'Rakefile', 'README.md']

  spec.add_runtime_dependency 'activeadmin', '~> 2.0'
end
