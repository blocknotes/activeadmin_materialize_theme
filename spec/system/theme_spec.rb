# frozen_string_literal: true

RSpec.describe 'Theme', type: :system do
  it 'applies the theme styles' do
    visit '/admin/posts'

    expect(page).to have_css('body.active_admin .title_bar', style: { 'margin-bottom': '0px' })
    style = { 'display': 'inline-block', 'margin-bottom': '0px' }
    expect(page).to have_css('body.active_admin #titlebar_left h2', style: style)
    expect(page).to have_css('body.active_admin .header', style: { 'margin-bottom': '0px' })
    expect(page).to have_css('body.active_admin .sidebar h3', style: { 'margin': '0px' })
    expect(page).to have_css('body.active_admin .footer', style: { 'position': 'absolute' })
  end
end
