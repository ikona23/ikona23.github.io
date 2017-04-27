Vue.component('port', {

    template:`<div>
      <h1>hello</h1>
      {{porfolio.regal}}
    </div>`,
    data() {
        return {
            portfolio: {
                regal: {
                    image: './img/cake.png',
                    imageLogo: './img/pklogo.png',
                    note: 'Regalburger website',
                    projectName: 'regalburger',
                    text: "hello about",
                    tech:["#css3","#html5","#rails"]
                },
                green:{
                    image:'./img/mrgreen.png',
                    note: 'mrgreencarepets',
                    projectName: 'mrgreencarpets',
                    text: "hello portfolio"
                },
                drift:{
                    image:'./img/drft.png',
                    note: 'Contact',
                    text: "hello contact"
                }
            },
        }
    }
});

new Vue({
    el:'#root'
})
