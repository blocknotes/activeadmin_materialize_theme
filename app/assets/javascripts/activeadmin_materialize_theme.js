//= require ./materialize/bin/materialize

(function () {
  'use strict'

  // --- functions -------------------------------------------------------------
  function addClassToElements(elements, class_name) {
    document.querySelectorAll(elements).forEach(
      (el) => el.classList.add(class_name)
    )
  }

  function initCheckboxes() {
    document.querySelectorAll('body.active_admin .resource_selection_cell').forEach((el) => {
      const checkbox = el.querySelector('[type="checkbox"]')
      const label = document.createElement('label')
      const span = document.createElement('span')
      span.className = 'aa_mt_checkbox'
      label.appendChild(span)
      el.appendChild(label)
      label.insertBefore(checkbox, span)
    })
    const selector = 'body.active_admin .resource_selection_toggle_cell >label, body.active_admin .choices >label'
    document.querySelectorAll(selector).forEach((el) => prepareCheckbox(el))
  }

  function initDropdowns() {
    let cnt = 0;
    document.querySelectorAll('body.active_admin .dropdown_menu').forEach((el) => {
      cnt += 1
      const button = el.querySelector('.dropdown_menu_button')
      button.className += ' dropdown-trigger'
      button.setAttribute('data-target', `#dropdown-${cnt}`)
      button.setAttribute('href', 'Javascript:void(0)')
      const list_wrapper = el.querySelector('.dropdown_menu_list_wrapper')
      list_wrapper.className += ' dropdown-content'
      list_wrapper.setAttribute('id', `#dropdown-${cnt}`)
    })
  }

  function initFormFields() {
    addClassToElements('body.active_admin .formtastic .input', 'input-field')
    addClassToElements('body.active_admin .formtastic textarea', 'materialize-textarea')
    document.querySelectorAll('body.active_admin .input-field.boolean > label').forEach((el) => prepareCheckbox(el))
  }

  function initNestedEditors() {
    document.querySelectorAll('body.active_admin .has_many_container').forEach((el) => {
      const observer = new MutationObserver((_mutationsList, _observer) => {
        initFormFields()
      })
      observer.observe(el, { childList: true, subtree: true });
    })
  }

  function initNestedMenu() {
    let nested_menu_cnt = 0
    addClassToElements('body.active_admin .menu_item.has_nested >ul', 'dropdown-content')
    document.querySelectorAll('.menu_item.has_nested').forEach((el) => {
      nested_menu_cnt += 1
      el.childNodes.forEach((node) => {
        if(node.tagName == 'A') {
          node.className += ' dropdown-trigger'
          node.setAttribute('data-target', `nested-menu-${nested_menu_cnt}`)
        }
        else if(node.tagName == 'UL') {
          node.setAttribute('id', `nested-menu-${nested_menu_cnt}`)
        }
      })
    })
  }

  function initTabs() {
    document.querySelectorAll('body.active_admin .formtastic >.tabs').forEach(
      (el) => el.classList.remove('tabs')
    )
    addClassToElements('body.active_admin .formtastic .nav-tabs', 'tabs')
    addClassToElements('body.active_admin .formtastic .nav-tabs >li', 'tab')
  }

  function prepareCheckbox(el) {
    const text = el.lastChild
    if (text.nodeType == Node.TEXT_NODE) {
      const span = document.createElement('span')
      span.innerHTML = text.textContent
      span.className = 'aa_mt_checkbox'
      text.replaceWith(span)
    }
  }

  function setup() {
    addClassToElements('body.active_admin #header >.tabs', 'no-autoinit')
    initCheckboxes()
    initDropdowns()
    initFormFields()
    initNestedMenu()
    initTabs()
    M.AutoInit()
    initNestedEditors()
  }

  // --- events ----------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', setup)

  // TODO: check theme loading with Turbolinks
  // document.addEventListener('turbolinks:load', setup)
})()
