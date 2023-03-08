class JhoonsaTextarea extends HTMLTextAreaElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const textarea = document.createElement("textarea");
    shadow.appendChild(textarea);
  }
}

customElements.define(
  "textarea[jhoonsa-textarea]",
  JhoonsaTextarea,
  { extends: "textarea" }
);
