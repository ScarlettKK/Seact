// 1. 从DOM开始
//    想想我们最初学习JS的时候，是如何使用JS创建一个DOM元素，给它绑定属性与方法，并把它渲染到页面上的？

const root = document.getElementById('root')

const input = document.createElement('input')

input['type'] = 'text'
input['value'] = 'Hello World'
input['className'] = 'my-class'

input.addEventListener('change', e => console.log(e.target.value))

root.appendChild(input)

//    同样道理，我们也可以创建一个纯text的node，这类node在我们后面会用到

const text = document.createTextNode('')

text['nodeValue'] = 'Hello World'

root.appendChild(text)