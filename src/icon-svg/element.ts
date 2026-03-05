import DOMPurify from 'isomorphic-dompurify';
import { IconName, registry } from './icons';

export class IconSvg extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'color', 'size']
  }

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    if (!this.shadowRoot) return

    const name = (this.getAttribute('name') as IconName) || ''
    const color = this.getAttribute('color') || '#fff'
    const size = this.getAttribute('size') || '24px'

    if (!name) {
      console.warn('Icon name is required.')
      return
    }

    const iconFn = registry.getIcon(name)

    if (!iconFn) {
      console.warn(`Icon "${name}" not found.`)
      return
    }

    const rawSvg = iconFn(color)
    const safeHtml = DOMPurify.sanitize(rawSvg)

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-flex;
          height: ${size};
          width: ${size};
        }
        svg {
          display: inline-block;
          height: 100%;
          width: 100%;
        }
      </style>
      ${safeHtml}
    `
  }
}

if (!customElements.get('icon-svg')) {
  customElements.define('icon-svg', IconSvg)
}
