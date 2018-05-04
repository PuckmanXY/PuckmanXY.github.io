var navbarVue = new Vue({
    el: '#navbarVue',
    data: {
        sections : [
            {
                name: 'Sobre',
                href: '#About',
            },
            {
                name: 'Portfolio',
                href: '#Portfolio',
            },
            {
                name: 'Habilidades',
                href: '#Abilities'
            },
            {
                name: 'Contato',
                href: '#Contact',
            }
        ],
    },
})

var aboutSectionVue = new Vue({
    el: '#About',
    data: {
        title: 'Quem sou eu?',
        description: 'Olá, me chamo Kayo e tenho 18 anos. Sou desenvolvedor iniciante atualmente cursando Engenharia de Computação no Instituto Federal de Educação, Ciência e Tecnologia do Ceará e buscando novas chances de aprender novas coisas! Além disso também sou fotógrafo amador, músico para mim mesmo e entusiasta da poesia beat!'
    },
})

var portfolioSectionVue = new Vue({
    el: '#Portfolio',
    data: {
        projects: [  //Cada elemento do array é composto por 1 array contendo 2 objetos (cada um um projeto)
            [{
                name: 'Lucas Silveira Webpage',
                iconURL: 'img/Lucas_Silveira.png',
                description: 'Minha primeira página web utilizando o framework Bootstrap',
                linkForProject: 'https://puckmanxy.github.io/Tribute-page/',
            },

            {
                name: 'Pursuit Game',
                iconURL: 'img/Pursuit_Game.png',
                description: 'Jogo feito em Python utilizando a biblioteca Turtle',
                linkForProject: 'https://github.com/PuckmanXY/Pursuit-game',
            }],

            [{
                name: 'Fighting Beasts',
                iconURL: 'img/Fighting_Beasts.png',
                description: 'Jogo de texto com elementos rpg em Python utilizando a ferramenta TKinter',
                linkForProject: 'https://github.com/PuckmanXY/Fighting-Beasts',
            },

            {
                name: 'APIs com Node',
                iconURL: 'img/nodeJS.png',
                description: 'Em meu github existem alguns repositórios de APIs feitas com NodeJS',
                linkForProject: 'https://www.github.com/PuckmanXY',
            }],
        ]
    }
})
