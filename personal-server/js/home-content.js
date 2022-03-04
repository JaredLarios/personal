/*-- Home page content builder --*/
const head = document.querySelector('.init');
const main = document.querySelector('.mid')

const home = {
    header: (e) => {
        head.innerHTML = `<h2>Jed Server</h2>`
    },
    body: (e) => {
        main.innerHTML = `
            <div class='banner-header'>
                <h1>${e.content.header}<h1>
            </div>              
            <div class='img-header'>
                <img src='${e.images.header}' alt='xbox'>
            </div> 
        `
        console.log(main);
        
    }
}
export default home;