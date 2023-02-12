let arvore = { //Objeto arvore

    //Nós da arvore
    left:{
        left:undefined,
        right:{
            value:3
        },

        value:2
    },
    right:undefined,
    value: 10 

}

function preOrder(tree){ 
    c
    onsole.log(tree.value)
    tree.left &&  preOrder(tree.left) //Recursivamente vai à esquerda da arvore SE valores não nulos em left
    tree.right && preOrder(tree.right)//Recursivamente vai à direita da arvore SE valores não nulos em right

}

function inOrder(tree){ 
    
    tree.left &&  preOrder(tree.left) //Recursivamente vai à esquerda da arvore SE valores não nulos em left
    console.log(tree.value)
    tree.right && preOrder(tree.right)//Recursivamente vai à direita da arvore SE valores não nulos em right

}

function posOrder(tree){ 
    
    tree.left &&  preOrder(tree.left) //Recursivamente vai à esquerda da arvore SE valores não nulos em left
    tree.right && preOrder(tree.right)//Recursivamente vai à direita da arvore SE valores não nulos em right
    console.log(tree.value)
}