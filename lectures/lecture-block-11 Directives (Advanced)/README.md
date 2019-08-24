### Lecture block 11 (Section 12), Directives

### Directive Hooks

* bind - how could directive be bound to element.
> bind(el, binding, vnode)

1. el - refer to  element
2. binding - way for directive to set up. Argument, modifiers.
3. vnode - node of virtual dom. 

* insert - how to insert to parent node
> insert(el, binding, vnode)
1. el - refer to  element
2. binding - way for directive to set up. Argument, modifiers.
3. vnode - node of virtual dom. 

* update - how to update existing node in a dom. Will be updated without children
> update(el, binding, vnode, oldVnode)
1. el - refer to  element
2. binding - way for directive to set up. Argument, modifiers.
3. vnode - node of virtual dom. 
4. oldVnode - since updated we have "newVnode" and "oldVnode". 

* componentUpdate - how to update existing node in a dom WITH all children inside.
> componentUpdate(el, binding, vnode, OldVnode)
1. el - refer to  element
2. binding - way for directive to set up. Argument, modifiers.
3. vnode - node of virtual dom. 
4. oldVnode - since updated we have "newVnode" and "oldVnode". 

* unbind - how to unbind element from DOM.
> unbind(el, binding, vnode)
1. el - refer to  element
2. binding - way for directive to set up. Argument, modifiers.
3. vnode - node of virtual dom. 

![VueJS-instance-lifecycle](../../images-from-course/164-Directive-Hooks.jpg)