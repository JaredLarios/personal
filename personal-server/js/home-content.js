/*-- Home page content builder --*/
const head = document.querySelector('.init');

const home = {
    header: (e) => {
        head.innerHTML = `<h1>${e.content.header}<h1>`
        console.log(head);
    }
}
export default home;