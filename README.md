# Active Admin Materialize Theme
[![gem version](https://badge.fury.io/rb/activeadmin_materialize_theme.svg)](https://badge.fury.io/rb/activeadmin_materialize_theme)
[![gem downloads](https://badgen.net/rubygems/dt/activeadmin_materialize_theme)](https://rubygems.org/gems/activeadmin_materialize_theme)
[![linters](https://github.com/blocknotes/activeadmin_materialize_theme/actions/workflows/linters.yml/badge.svg)](https://github.com/blocknotes/activeadmin_materialize_theme/actions/workflows/linters.yml)
[![specs](https://github.com/blocknotes/activeadmin_materialize_theme/actions/workflows/specs.yml/badge.svg)](https://github.com/blocknotes/activeadmin_materialize_theme/actions/workflows/specs.yml)

A theme for [Active Admin](https://activeadmin.info) based on [Materialize](https://materializecss.com) framework.

Please :star: if you like it.

## Installation

Turbolinks is not supported at the moment.

- Add to the Gemfile: `gem 'activeadmin_materialize_theme'` (and execute `bundle`)
- In _app/assets/stylesheets/active_admin.scss_) leave only this import line:
```scss
@import 'activeadmin_materialize_theme/theme';
```
- (optionally) Enable Roboto font:
```scss
@import 'activeadmin_materialize_theme/roboto';
```
- Add at the end of your Active Admin javascripts (_app/assets/javascripts/active_admin.js_):
```js
//= require activeadmin_materialize_theme
```

## Screenshots

- Index page (with scopes and filters):
![index_page](extra/screenshot.png)
- Edit page (with a nested form):
![edit_page](extra/screenshot2.png)

## Do you like it? Star it!

If you use this component just star it. A developer is more motivated to improve a project when there is some interest. My other [Active Admin components](https://github.com/blocknotes?utf8=✓&tab=repositories&q=activeadmin&type=source).

Or consider offering me a coffee, it's a small thing but it is greatly appreciated: [about me](https://www.blocknot.es/about-me).

## Contributors

- [Mattia Roccoberton](http://blocknot.es): author

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
