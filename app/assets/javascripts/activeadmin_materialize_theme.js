//= require ./materialize/bin/materialize

(function () {
  // --- functions -------------------------------------------------------------
  function addClassToElements(class_name, elements) {
    document.querySelectorAll(elements).forEach(
      (el) => el.className += ' ' + class_name
    )
  }

  function initCheckboxes() {
    document.querySelectorAll('body.active_admin .resource_selection_cell').forEach((el) => {
      const checkbox = el.querySelector('[type="checkbox"]')
      const label = document.createElement('label')
      const span = document.createElement('span')
      label.appendChild(span)
      el.appendChild(label)
      label.insertBefore(checkbox, span)
    })
  }

  function initDropdowns() {
    let cnt = 0;
    document.querySelectorAll('body.active_admin .dropdown_menu').forEach((el) => {
      cnt += 1
      button = el.querySelector('.dropdown_menu_button')
      button.className += ' dropdown-trigger'
      button.setAttribute('data-target', `#dropdown-${cnt}`)
      button.setAttribute('href', 'Javascript:void(0)')
      list_wrapper = el.querySelector('.dropdown_menu_list_wrapper')
      list_wrapper.className += ' dropdown-content'
      list_wrapper.setAttribute('id', `#dropdown-${cnt}`)
    })
  }

  function initFormFields() {
    addClassToElements('input-field', 'body.active_admin .formtastic .input')
    addClassToElements('materialize-textarea', 'body.active_admin .formtastic textarea')
    document.querySelectorAll('body.active_admin .input-field.boolean > label').forEach((el) => {
      const text = el.lastChild
      if (text.nodeType == Node.TEXT_NODE) {
        const span = document.createElement('span')
        span.innerHTML = text.textContent
        text.replaceWith(span)
      }
    })
  }

  function setup() {
    addClassToElements('no-autoinit', 'body.active_admin #header >.tabs')
    initCheckboxes()
    initDropdowns()
    initFormFields()
    M.AutoInit()
  }

  // --- events ----------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    setup()
  })

  $(document).on('has_many_add:after', '.has_many_container', () => {
    setup()
  })
})()