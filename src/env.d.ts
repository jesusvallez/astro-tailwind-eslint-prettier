/// <reference types="astro/client" />

declare namespace globalThis {
  interface Document {
    // add you custom properties and methods
    startViewTransition: (callback: () => void) => null
  }
}
