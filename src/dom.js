window.dom = {
    find(selector){
        const elementList = document.querySelectorAll(selector)
        return elementList
    },
    style(node,name,config){
        if(arguments.length === 3){
            node.style[name] = config
        }else{
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(node,fn){
        const {childNodes} = node
        for(let i = 0; i < childNodes.length; i++){
            fn.call(null,childNodes[i])
        }
    }
}