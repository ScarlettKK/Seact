// 4. 从 JSX 到 JS element
//    在React中，我们通常使用JSX来定义一个element，而不是JS element
//    因为很明显JSX对开发者编写代码以及理解代码更为友好
//    本节我们将学习如何将JSX转化成JS element


//    创建一个 JSX element
const element = (
  <div id="container">
    <input value="foo" type="text" />
    <a href="/bar">bar</a>
    <span onClick={e => alert("Hi")}>click me</span>
  </div>
)

// 然后 babel 编译器会将上面的 JSX 代码转化成
const element = createElement(
  "div",
  { id: "container" },
  createElement("input", { value: "foo", type: "text" }),
  createElement(
    "a",
    { href: "/bar" },
    "bar"
  ),
  createElement(
    "span",
    { onClick: e => alert("Hi") },
    "click me"
  )
)

// 我们这边所要做的工作，就是写一个自定义的 createElement 函数，让上面的代码可以调用
// 自定义的 createElement 函数也可以创造我们所需要的 JS element
function createElement(type, config, ...args) {
  const props = { ...config }

  props.children = args.length > 0 ? [].concat(...args) : []

  return { type, props }
}


// 下面添加对 text element 的特殊处理
const TEXT_ELEMENT = "TEXT ELEMENT"

function createElement(type, config, ...args) {
  const props = { ...config }

  const children = args.length > 0 ? [].concat(...args) : []

  props.children = children
    .filter(child => child != undefined && child !== false)
    .map(child => child instanceof Object ? child : createTextElement(child))

  return { type, props }
}

function createTextElement(text) {
  return createElement(TEXT_ELEMENT, { nodeValue: text })
}