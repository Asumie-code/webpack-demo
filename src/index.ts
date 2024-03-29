import * as _ from 'lodash'
import test from './test.txt'

if (process.env.NODE_ENV !== 'production') console.log('looks like we ar ein development mode!')


function component() {
  const element = document.createElement('pre');
  const button = document.createElement('button')
  const br = document.createElement('br')
  const helloElement = document.createElement('div')

  button.innerHTML = 'Click me and look at the console'
  helloElement.innerHTML = test

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')



  element.appendChild(br)
  element.appendChild(button)
  element.appendChild(helloElement)

  button.onclick = e => import(/* webpackChunkName: "print" */'./print').then(module => {
    const print = module.default

    print()
  })



  return element;
}


document.body.appendChild(component())


