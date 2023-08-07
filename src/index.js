import _ from 'lodash'

if (process.env.NODE_ENV !== 'production') console.log('looks like we ar ein development mode!')


function component() {
  const element = document.createElement('pre');
  const button = document.createElement('button')
  const br = document.createElement('br')

  button.innerHTML = 'Click me and look at the console'

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')


  element.appendChild(br)
  element.appendChild(button)

  button.onclick = e => import(/* webpackChunkName: "print" */'./print').then(module => {
    const print = module.default

    print()
  })



  return element;
}


document.body.appendChild(component())


