/*-- Home page content builder --*/
const head = document.querySelector('.init');

const home = {
    header: (e) => {
        head.innerHTML = `
            <img src='${e.images.header}'>
            <div class='img-header'>
                <h1>${e.content.header}<h1>
            </div>              
        `
        console.log(head);
    }
}
export default home;