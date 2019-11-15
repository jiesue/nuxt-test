
export default ({ app }, inject) => {
    app.myInjectedFunction = (string) => console.log('Okay, another function', string)
    //如果同时注入vue实例中，写成如下形式：
    //inject('myInjectedFunction', (string) => console.log('That was easy!', string))
  }
