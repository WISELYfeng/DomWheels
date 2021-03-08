window.dom = {
    find(selector){
        const elementList = document.querySelectorAll(selector)
        return elementList
    },
    style(node,name,config){
        node.style[name] = config
    },
    each(node,fn){
        const {childNodes} = node
        for(let i = 0; i < childNodes.length; i++){
            fn.call(null,childNodes[i])
        }
    }
}