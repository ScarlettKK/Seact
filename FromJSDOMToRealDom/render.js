// 3. 结合我们刚才创建的JS element 以及 DOM渲染函数
//    将SeatElement渲染到页面上(暂不考虑属性以及方法)

function render(rootElement, SeatElement) {
  const { type, props } = SeatElement

  const element = document.createElement(type)

  const children = props.children || []

  children.forEach(child => {
    render(element, child)
  })

  rootElement.appendChild(element)
}

//    添加属性以及方法

const isListener = name => name.startsWith('on')
const isAttribute = name => !isListener(name) && name != 'children'

function render(rootElement, SeatElement) {
  const { type, props } = SeatElement

  const element = document.createElement(type)

  Object.keys(props).filter(isAttribute).forEach(name => {
    dom[name] = props[name];
  })

  Object.keys(props).filter(isListener).forEach(name => {
    const eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, props[name]);
  })

  const children = props.children || []

  children.forEach(child => {
    render(element, child)
  })

  rootElement.appendChild(element)
}

//    处理文字节点
/*
 *  {
 *      type: "TEXT ELEMENT",
 *      props: { nodeValue: "Foo" }
 *  }
 */

const isListener = name => name.startsWith('on')
const isAttribute = name => !isListener(name) && name != 'children'

function render(rootElement, SeatElement) {
  const { type, props } = SeatElement

  const isTextElement = type === "TEXT ELEMENT"
  const element = isTextElement ? document.createTextNode('') : document.createElement(type)

  Object.keys(props).filter(isAttribute).forEach(name => {
    dom[name] = props[name];
  })

  if (isTextElement) { return }

  Object.keys(props).filter(isListener).forEach(name => {
    const eventType = name.toLowerCase().substring(2);
    dom.addEventListener(eventType, props[name]);
  })

  const children = props.children || []

  children.forEach(child => {
    render(element, child)
  })

  rootElement.appendChild(element)
}