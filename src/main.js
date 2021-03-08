const dom1 = dom.find('#test')[0]

dom.style(dom1,'color','red')

dom.each(dom1,(n) => {
    console.log(n)
})