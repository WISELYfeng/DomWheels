window.dom = {
    create(string){
        const container = document.createElement("template")
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
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
    each(nodeList,fn){
        for(let i = 0; i < nodeList.length; i++){
            fn.call(null,nodeList[i])
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    remove(node){
        node.parentNode.removChild(node)
    }
}