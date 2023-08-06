

if (process.env.NODE_ENV !== 'production') console.log('looks like we ar ein development mode!')


function component() {
  const element = document.createElement('pre');
  const button = document.createElement('button')
  const br = document.createElement('br')

  button.innerHTML = 'Click me and look at the console'

  element.innerHTML = join(['Hello', 'webpack'], ' ')

// assume we are in the context of 'window'
this.alert('Hmmm, this probably isn\'t a great idea')
  element.appendChild(br)
  element.appendChild(button)

  button.onclick = e => import(/* webpackChunkName: "print" */'./print').then(module => {
    const print = module.default

    print()
  })



  return element;
}


document.body.appendChild(component())


fetch('https://jsonplaceholder.typicode.com/users')

  .then((response) => response.json())

  .then((json) => {

    console.log(

      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."

    );

    console.log(json);

  })

  .catch((error) =>

    console.error('Something went wrong when fetching this data: ', error)

  );