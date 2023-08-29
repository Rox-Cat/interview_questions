/* 
    节点的挂载
        实现的功能：将虚拟Dom挂载到真实Dom上

*/

function mountElement(vnode, container) {
    // 将 vnode -> 添加到container的子节点上
    el = 将vnode创建为真实节点
    if vnode 是叶子节点:
        直接挂载
    else if 如果是数组:
        遍历数组
            patch(null, child,el)

}
