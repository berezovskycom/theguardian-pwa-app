export class CreateEl {
  constructor(el, className, attr, attrValue, content, parentDom) {
    this.el = el;
    this.className = className;
    this.attr = attr;
    this.attrValue = attrValue;
    this.content = content;
    this.parentDom = parentDom;
    this.thisEl = document.createElement(el);
  }

  init() {
    let {thisEl, el, className, attr, 
    attrValue, content, parentDom} = this;
    thisEl.classList.add(className);
    if (attr != '') {
      thisEl.setAttribute(attr, attrValue);      
    }
    thisEl.innerHTML = content;
    document.querySelector(parentDom).appendChild(thisEl);
  }

  createElement(element) {
    let createdElement = document.createElement(element);
    return createdElement;
  }

  addClassName(name) {
    const { thisEl, className } = this;
    thisEl.classList.add(name);
  }

  setAttr() {
    const { attr, attrValue } = this;
  }

  remove() {
    parentDom.remove(thisEl);
  }
}
