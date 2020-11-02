// 2. 使用js对象来描述一个DOM元素
//    从JS Class的角度来思考，我们应该怎么样描述一个DOM？
const element = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "input", props: { value: "foo", type: "text" } },
      { type: "a", props: { href: "/bar" } },
      { type: "span", props: {} }
    ]
  }
}