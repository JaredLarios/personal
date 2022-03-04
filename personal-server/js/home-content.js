/*-- Home page content builder --*/
const head = document.querySelector('.init');

const home = {
    header: (e) => {
        head.innerHTML = `
            <div class='img-header'>
                <img src='${e.images.header}' alt='xbox'>
            </div> 
            <div class='banner-header'>
                <h1>${e.content.header}<h1>
            </div>              
        `
        console.log(head);
    }
}
export default home;