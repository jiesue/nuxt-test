


function importAll(r) {
    let modules = {};
    r.keys().forEach(key => {
        // const moduleName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
        let obj = r(key).default;
        modules = Object.assign(modules,obj);
    });
    console.log(process);

    return modules;
}
export default importAll(require.context('./file/', false, /\.js$/));
