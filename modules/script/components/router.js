export default async function router (){
    let hash = window.location.hash.slice(1);
    let idIndex = hash.indexOf('_');
    let id = null;
    if(hash && idIndex !== -1) {
        id = hash.slice(idIndex + 1)
        hash = hash.slice(0, idIndex);
        //console.log(id);
        //console.log(hash);
    }
    if (!hash) hash = 'home';

    let component = await import(`../pajes/${hash}.js`);
    console.log(component);
    return [component.default, id];
}