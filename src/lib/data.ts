import building_facade_m2 from '@/assets/images/m2/building_facade-m2.jpg'
import building_facade_m3 from '@/assets/images/m3/building_facade-m3.jpg'
import building_facade_jl1 from '@/assets/images/jl1/building_facade-jl1.jpg'
import building_facade_jl2 from '@/assets/images/jl2/building_facade-jl2.jpg'
import building_facade_jl3 from '@/assets/images/jl3/building_facade-jl3.jpg'
import building_facade_muricy from '@/assets/images/muricy/building_facade-muricy.jpg'

import m2_360_1 from '@/assets/images/m2/360/img_360-1.jpg'
import m2_360_2 from '@/assets/images/m2/360/img_360-2.jpg'
import m2_360_3 from '@/assets/images/m2/360/img_360-3.jpg'
import m2_360_4 from '@/assets/images/m2/360/img_360-4.jpg'
import m2_360_5 from '@/assets/images/m2/360/img_360-5.jpg'
import m2_360_6 from '@/assets/images/m2/360/img_360-6.jpg'
import m2_360_7 from '@/assets/images/m2/360/img_360-7.jpg'
import m2_360_8 from '@/assets/images/m2/360/img_360-8.jpg'
import m2_360_9 from '@/assets/images/m2/360/img_360-9.jpg'

import m3_360_1 from '@/assets/images/m3/360/img_360-1.jpg'
import m3_360_2 from '@/assets/images/m3/360/img_360-2.jpg'
import m3_360_3 from '@/assets/images/m3/360/img_360-3.jpg'
import m3_360_4 from '@/assets/images/m3/360/img_360-4.jpg'
import m3_360_5 from '@/assets/images/m3/360/img_360-5.jpg'

import jl1_360_1 from '@/assets/images/jl1/360/img_360-1.jpg'
import jl1_360_2 from '@/assets/images/jl1/360/img_360-2.jpg'
import jl1_360_3 from '@/assets/images/jl1/360/img_360-3.jpg'
import jl1_360_4 from '@/assets/images/jl1/360/img_360-4.jpg'
import jl1_360_5 from '@/assets/images/jl1/360/img_360-5.jpg'
import jl1_360_6 from '@/assets/images/jl1/360/img_360-6.jpg'
import jl1_360_7 from '@/assets/images/jl1/360/img_360-7.jpg'
import jl1_360_8 from '@/assets/images/jl1/360/img_360-8.jpg'
import jl1_360_9 from '@/assets/images/jl1/360/img_360-9.jpg'
import jl1_360_10 from '@/assets/images/jl1/360/img_360-10.jpg'
import jl1_360_11 from '@/assets/images/jl1/360/img_360-11.jpg'
import jl1_360_12 from '@/assets/images/jl1/360/img_360-12.jpg'

import jl2_360_1 from '@/assets/images/jl2/360/img_360-1.jpg'
import jl2_360_2 from '@/assets/images/jl2/360/img_360-2.jpg'
import jl2_360_3 from '@/assets/images/jl2/360/img_360-3.jpg'
import jl2_360_4 from '@/assets/images/jl2/360/img_360-4.jpg'
import jl2_360_5 from '@/assets/images/jl2/360/img_360-5.jpg'
import jl2_360_6 from '@/assets/images/jl2/360/img_360-6.jpg'
import jl2_360_7 from '@/assets/images/jl2/360/img_360-7.jpg'

import jl3_360_1 from '@/assets/images/jl3/360/img_360-1.jpg'
import jl3_360_2 from '@/assets/images/jl3/360/img_360-2.jpg'
import jl3_360_3 from '@/assets/images/jl3/360/img_360-3.jpg'
import jl3_360_4 from '@/assets/images/jl3/360/img_360-4.jpg'
import jl3_360_5 from '@/assets/images/jl3/360/img_360-5.jpg'

import muricy_360_1 from '@/assets/images/muricy/360/img_360-1.jpg'
import muricy_360_2 from '@/assets/images/muricy/360/img_360-2.jpg'
import muricy_360_3 from '@/assets/images/muricy/360/img_360-3.jpg'
import muricy_360_4 from '@/assets/images/muricy/360/img_360-4.jpg'
import muricy_360_5 from '@/assets/images/muricy/360/img_360-5.jpg'
import muricy_360_6 from '@/assets/images/muricy/360/img_360-6.jpg'
import muricy_360_7 from '@/assets/images/muricy/360/img_360-7.jpg'
import muricy_360_8 from '@/assets/images/muricy/360/img_360-8.jpg'

import m2_environments_1 from '@/assets/images/m2/environments/img_360-1.jpg'
import m2_environments_2 from '@/assets/images/m2/environments/img_360-2.jpg'
import m2_environments_3 from '@/assets/images/m2/environments/img_360-3.jpg'
import m2_environments_4 from '@/assets/images/m2/environments/img_360-4.jpg'
import m2_environments_5 from '@/assets/images/m2/environments/img_360-5.jpg'
import m2_environments_6 from '@/assets/images/m2/environments/img_360-6.jpg'

import type { StaticImageData } from 'next/image'

export type Building = {
    city: string;
    address: string
    names: {
        short: string
        long: string
    }
    img: {
        building_facade: StaticImageData,
        pictures_360: string[],
        environments: StaticImageData[]
    }
    text: {
        title: string
        description: string
    }
    values: {
        value: number
        description: string
    }[]
};

export const buildings: Building[] = [
    {
        city: "curitiba",
        address: 'R. Mal. Deodoro, 421, Centro - Curitiba - PR, 80020-320',
        names: {
            short: "M2",
            long: 'Marechal 2'
        },
        img: {
            building_facade: building_facade_m2,
            pictures_360: [m2_360_1.src, m2_360_2.src, m2_360_3.src, m2_360_4.src, m2_360_5.src, m2_360_6.src, m2_360_7.src, m2_360_8.src, m2_360_9.src],
            environments:[m2_environments_1,m2_environments_2,m2_environments_3,m2_environments_4,m2_environments_5,m2_environments_6]
        },
        text: {
            title: 'Marechal 2 – Ou para os íntimos a PRAIA.',
            description: 'Aqui, o ambiente foi pensado para trazer leveza, descontração e boas vibrações todos os dias. Com decoração inspirada no litoral, cada detalhe convida você a trabalhar com mais leveza e bem-estar — como se estivesse à beira-mar, mas com toda a energia de um Game-changer.'
        },
        values: [
            {
                value: 2220,
                description: 'Game-changers que fazem acontecer todos os dias! Aqui, o clima é de praia, mas o ritmo é de resultados!'
            },
            {
                value: 13,
                description: 'Operações ativas.'
            },
            {
                value: 1085,
                description: 'Postos de atendimento.'
            }
        ]
    },
    {
        city: "curitiba",
        address: 'R. Mal. Deodoro, 170, Centro - Curitiba - PR, 80010-010',
        names: {
            short: "M3",
            long: 'Marechal 3'
        },
        img: {
            building_facade: building_facade_m3,
            pictures_360: [m3_360_1.src, m3_360_2.src, m3_360_3.src, m3_360_4.src, m3_360_5.src,]
        },
        text: {
            title: 'Marechal 3',
            description: 'Cada andar tem uma temática única, pensada para conectar de forma criativa o universo do atendimento com o foco no cliente. É mais que decoração — é inspiração para transformar cada contato em uma experiência memorável!',

        }, values: [
            {
                value: 1055,
                description: 'Trabalhando aqui! Cada um fazendo a diferença, transformando o jogo e criando experiências incríveis para nossos clientes! ',
            },
            {
                value: 6,
                description: 'Operações ativas.'
            },
            {
                value: 822,
                description: 'Postos de atendimento.'
            }
        ]
    },
    {
        city: "curitiba",
        address: 'R. José Loureiro, 371, Centro - Curitiba - PR, 80010-000',
        names: {
            short: "JL1",
            long: ' José Loureiro 1'
        },
        img: {
            building_facade: building_facade_jl1,
            pictures_360: [jl1_360_1.src, jl1_360_2.src, jl1_360_3.src, jl1_360_4.src, jl1_360_5.src, jl1_360_6.src, jl1_360_7.src, jl1_360_8.src, jl1_360_9.src, jl1_360_10.src, jl1_360_11.src, jl1_360_12.src]

        },
        text: {
            title: 'JL1',
            description: 'Com uma decoração única e temática diferenciada, cada espaço aqui é pensado para inspirar criatividade e inovação. Na nossa Área de Tecnologia, é onde a magia acontece: é lá que o Zeus ganha vida, desenvolvido por um time de especialistas que transformam ideias em soluções poderosas. Aqui, cada detalhe conta para impulsionar a excelência'
        },
        values: [
            {
                value: 1656,
                description: 'Game-changers que fazem esse prédio um lugar de experiencias únicas! Cada um com sua energia e talento, transformando ideias em resultados e levando a inovação a novos patamares.'
            },
            {
                value: 13,
                description: 'Operações ativas.'
            },
            {
                value: 977,
                description: 'Postos de atendimento.'
            }
        ]

    },
    {
        city: "curitiba",
        address: 'R. José Loureiro, 540, Centro - Curitiba - PR, 80010-000',
        names: {
            short: "JL2",
            long: 'José Loureiro 2'
        },
        img: {
            building_facade: building_facade_jl2,
            pictures_360: [jl2_360_1.src, jl2_360_2.src, jl2_360_3.src, jl2_360_4.src, jl2_360_5.src, jl2_360_6.src, jl2_360_7.src]


        },
        text: {
            title: 'JL2',
            description: 'Cada andar tem uma temática diferenciada, pensada para nos aproximar ainda mais do nosso cliente e do atendimento. A cada nível, uma experiência única que nos conecta de forma criativa e inovadora, sempre em busca da excelência no serviço prestado.'
        },
        values: [
            { value: 2179, description: 'Game-changers! O lugar perfeito para crescer, inovar e fazer a diferença juntos!' },
            {
                value: 18, description: 'Operações ativas.'
            },
            {
                value: 1576, description: 'Postos de atendimento.'
            }
        ]
    },
    {
        city: "curitiba",
        address: 'R. José Loureiro, 376, Centro - Curitiba - PR, 80010-000',
        names: {
            short: "JL3",
            long: 'José Loureiro 3'
        },
        img: {
            building_facade: building_facade_jl3,
            pictures_360: [jl3_360_1.src, jl3_360_2.src, jl3_360_3.src, jl3_360_4.src, jl3_360_5.src]
        },
        text: {
            title: 'JL3',
            description: 'Com uma decoração única e temática diferenciada, ele é o cenário perfeito para o treinamento inicial e o recrutamento de novos Game-changers. Cada detalhe é pensado para inspirar, capacitar e trazer à tona o melhor de cada pessoa, preparando-os para fazer a diferença desde o primeiro dia.'
        },
        values: [
            {
                value: 585,
                description: 'Game-changers espalhados por este prédio, a energia é contagiante! Cada pessoa, uma força para transformar o jogo e criar soluções incríveis.'
            },
            {
                value: 19,
                description: 'Salas de treinamento.'
            },
            { value: 585, description: 'Postos de atendimento.' }
        ]
    },
    {
        city: "curitiba",
        address: 'Al. Dr. Muricy, 420, Centro - Curitiba - PR, 80010-120',
        names: {
            short: "Muricy",
            long: 'Muricy'
        },
        img: {
            building_facade: building_facade_muricy,
            pictures_360: [muricy_360_1.src, muricy_360_2.src, muricy_360_3.src, muricy_360_4.src, muricy_360_5.src, muricy_360_6.src, muricy_360_7.src, muricy_360_8.src]
        },
        text: {
            title: 'Muricy',
            description: 'Com uma decoração única e cheia de estilo, cada andar é uma experiência. Temos tubogã para dar aquele toque de diversão e, em um dos andares, a nave do Zeus, onde a tecnologia e inovação ganham vida. Cada detalhe aqui foi pensado para inspirar e surpreender! '
        },
        values: [
            {
                value: 1301,
                description: 'Trabalhando neste prédio, a inovação e a energia estão sempre a mil! Cada um aqui fazendo a diferença, todos juntos transformando o jogo. '
            },
            {
                value: 5,
                description: 'Operações ativas.'
            },
            {
                value: 991,
                description: 'Postos de atendimento.'
            }
        ]
    },
]