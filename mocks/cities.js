import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";

export const CITIES_DATA = [
{
    name:'lisboa',
    title:'Tour de Lisboa',
    subtitle: 'Uma viagem inesquecivel aos encantos de Lisboa', 
    route: 'Conhecer a cidade de Lisboa', 
    description:<p>Nesta tour preparámos um roteiro com os principais pontos de Lisboa a visitar. Iníciamos a tour do seu ponto de preferência seja do seu hotel ou outra localização e o primeiro ponto de paragem da nossa viagem será o centro histórico de Lisboa. <br/>  Damos a conhecer toda a história da nossa cidade passando pelos pontos principais como: Praça do Comércio, Rossio, Alfama, Graça, Chiado e Bairro Alto. <br/>De seguida damos a conhecer a zona de Belém onde ficará a conhecer o Mosteiro dos Jerónimos, a magnífica Torre de Belém e o histórico Padrão dos Descobrimentos, terminando a nossa tour nos famosos Pastéis de Belém para adoçar o seu regresso.</p>,
    time:'8 horas'
}, 
{
    name:'sintra',
    title:'Tour de Sintra',
    subtitle: 'Um passeio de mãos dadas com a natureza', 
    route: 'Conhecer a serra de Sintra', 
    description:<p>Iniciamos a nossa tour com um passeio pela simpática vila de Sintra para conhecer o Palácio da Pena, os encantos das estradas que percorrem a serra de Sintra, o palácio Nacional de Sintra e o centro histórico da vila. <br/> De seguida passamos por conhecer o ponto mais ocidental da Europa, o famoso Cabo da Roca.<br/> Para terminar, a nossa tour passa por conhecer a vila de Cascais, as suas praias e a Boca do Inferno.</p>, 
    time:'8 horas',
},
{
    name:'arrabida',
    title:'Tour da Arrábida',
    subtitle: 'Os encantos do nosso mar', 
    route: 'Conhecer a serra da Arrábida', 
    description:<p>A nossa tour da Arrábida passa por conhecer os principais pontos do outro lado do rio. Começamos a nossa tour em Lisboa e seguimos para uma visita ao famoso Cristo Rei onde terá oportunidade de ver a magnifica vista para o rio Tejo e a cidade de Lisboa. <br/> Seguimos para conhecer a vila de Sesimbra e admirar as suas praias.<br/>Continuamos o passeio para uma visita à Vinicola José Maria da Fonseca na cidade de Azeitão. <br/>Seguimos a nossa visita com uma volta pela serra da Arrábida onde poderá admirar as bonitas praias e vistas magnificas da zona da Arrábida. <br/>Para terminar, seguimos em direção à cidade de Setúbal e regressamos a Lisboa pela conhecida Ponte Vasco da Gama.</p>, 
    time:'8 horas',
},
{
    name:'evora',
    title:'Tour de Évora',
    subtitle: 'A história e os vinhos', 
    route: 'Conhecer Évora', 
    description:<p>A nossa tour de Évora é uma viagem no tempo, nesta tour damos a conhecer os pontos principais da cidade de Évora conhecida pelos seus monumentos históricos e uma arquitetura fora do normal: O Templo de Diana, a Sé de Évora e a sua zona histórica, a famosa Capela dos Ossos, a Praça do Giraldo, a zona das Muralhas de Évora e terminamos a nossa tour com uma visita à Vinicola Cartuxa.</p>, 
    time:'10 horas',
},

{
    name:'coimbra',
    title:' Tour Lisboa - Coimbra',
    subtitle: 'Um passeio até ao centro de Portugal', 
    route: 'Conhecer o centro de Portugal', 
    description:<p>A nossa tour de Lisboa a Coimbra remete para uma viagem de cultura e paisagens mágnificas.<br/> A primeira paragem desta tour é na vila de Óbidos, uma vila localizada no distrito de Leiria conhecida pelo seu famoso Castelo e uma arquitetura que nos leva aos tempos mediavais. <br/> De Óbidos seguimos em direção à Nazaré, conhecida pela sua praia com as maiores ondas de Portugal e arredores.<br/>  Seguimos rumo a Coimbra com paragens no Mosteiro da Batalha e no Santuário de Fátima.<br/> Chegando à cidade de Coimbra são vários os pontos que podemos visitar: Ruínas de Conimbriga, Portugal dos pequeninos, Convento de Santa Clara, o centro histórico de Coimbra, Universidades e a Praça da República</p>, 
    time:'2 dias',
},

{
    name:'porto',
    title:'Tour Lisboa - Porto',
    subtitle: 'Os encantos do Norte', 
    route: 'Lisboa - Aveiro - Porto', 
    description:<p>Partindo de Lisboa, a primeira paragem desta tour é na cidade de Aveiro para conhecer os pontos principais da cidade: Ria de Aveiro, Moliceiros, as salinas e a Costa Nova. <br/> Depois de uma visita por Aveiro, seguimos viagem ao nosso destino.<br/>  A tour no Porto passa por conhecer todos os pontos turísticos e da história da cidade tais como: Estação de São Bento, Torre dos Clérigos, Catedral da Sé, a famosa livraria Lello, a Casa da música, a rua de Santa Catarina e todo o centro histórico da cidade até chegar à Ribeira e à Ponte D. Luis.<br/>  Para terminar, uma visita também às caves do vinho do Porto.</p>, 
    time:'1 dia',
},
{
    name:'fatima',
    title:'Tour de Fátima',
    subtitle: 'Conhecer o centro de Portugal', 
    route: 'Lisboa - Óbidos - Nazaré - Batalha - Fátima - Valinhos - Arruda dos Vinhos - Lisboa', 
    description:<p>Tal como a nossa Tour de Coimbra, esta tour leva-nos a conhecer a vila de Óbidos, as praias da Nazaré e o Mosteiro da Batalha. <br/> Chegando à cidade de Fátima podemos conhecer o famoso Santuário e em Valinhos a aldeia dos pastorinhos.<br/>  No regresso a Lisboa temos como última paragem o restaurante O Fuso em Arruda dos Vinhos para provar o melhor Bacalhau assado de Portugal.</p>, 
    time:'1 dia',
},

{
    name:'madrid',
    title:'Tour Lisboa - Madrid',
    subtitle: 'Nesta magnifica tour proporcionamos uma viagem de doze dias em que unimos os encantos principais de Portugal e Espanha para uma viagem inesquecivel!', 
    route: 'Lisboa - Madrid', 
    time:'12 dias',
    info: [
        {
        day:'Dia 1 (Lisboa - paragem em Évora - Sevilha)',
        description:'Com partida de Lisboa, o primeiro dia da tour tem como destino chegar a Espanha, Sevilha. Durante o primeiro dia da nossa tour a paragem será pela cidade de Évora. Um passeio que nos leva a descobrir os encantos de Évora desde a Sé da cidade, a capela dos ossos, o famoso Templo de Diana e passando ainda pela Adega da Cartuxa para uma incrível prova de vinhos e azeites.'
    }, 
    {
        day:'Dia 2 (Sevilha)',
        description:'Para conhecer Sevilha guardámos o segundo dia da nossa tour para um passeio turístico apenas na cidade passando por: Centro Histórico - Alcázar - Passeio Colón - Torre de Ouro - Praça de Espanha Catedral de Sevilha - Avenida de la Constitución - Bairro de Santa Cruz - Praça de Touros da Real Maestranza - Casa dos Pilatos - Ponte Triana - Calle Sierpes - Estacão de Córdoba - Colunas de Hércules - Basílica de Gran Poder - Macarena - Hotel.',
    }, 
    {
        day:'Dia 3 (Sevilha- Málaga - Granada)',
        description:' No terceiro dia partimos de Sevilha em direção a Granada com paragem por Málaga para conhecer o centro histórico e as suas praias.',
    },
    {
        day: 'Dia 4 (Granada)',
        description:' Um dia reservado para conhecer a cidade de Granada passando pelos seguintes pontos: Granada - Centro Histórico - Palácio de Alhambra - Alcabaza de Alhambra - Palácio de Generalife - Jardins Generalife - Miradouro de San Nicolas - Bairro de Albaicín - Passeio dos Tristes - Catedral de Granada - Bairro de Sacromonte - Capela Real de Granada - Mosteiro e Igreja de San Jerônimo - Via Colón - regresso ao hotel.',
    },
    {
        day: 'Dia 5 (Granada - Cordoba - Tolédo)',
        description:' No quinto dia partimos da cidade de Granada com destino a Tolédo e paragem por Cordoba para conhecer o centro histórico da cidade.',
    },
    {
        day: ' Dia 6 (Tolédo)',
        description:'Um dia reservado para conhecer a cidade de Tolédo passando pelos seguintes pontos: Alcazer de Toledo – Puerta de Bisagra – Centro histórico – Praça Zocodover – Puerta del Sol – Catedral de Toledo – Igreja de São Tomé – Igreja de Santiago de Arrabal – Igreja de São Salvador – Puerta do Sol – Mosteiro de Juan de los Reys – Paseo de San Cristobal – Puente de San Martin – Sinagoga de Maria la Blanca – Sinagoga de Transito - regresso ao hotel.',
    },

    {
        day:'Dia 7 (Tolédo - Madrid)',
        description:'Neste sétimo dia partimos de Tolédo com destino a Madrid.'
    }, 
    {
        day:'Dia 8 (Madrid)',
        description:' Um dia reservado para conhecer a cidade de Madrid passando pelos seguintes pontos: Madrid – Gran Via – Mercado de São Miguel – Parque do Retiro – Plaza Mayor – Puertas del Sol – Palácio Real – Praza Cibeles – Puerta de Alcalá – Calle de Alcalá – Museu do Prado – Praça de Touros Las Ventas – Estátua do Urso e Medronheiro – Estádio Santiago Barnabéu – regresso ao hotel. ',

    },
    {
        day:'Dia 9 (Madrid - Segóvia - Ávila)',
        description:'Partimos de Madrid com destino a Ávila passando pela cidade de Segóvia para conhecer os pontos principais: Monumento El Escorial – Vale dos caídos – Segóvia – Aqueduto de Segóvia – Alcazár de Segóvia – Catedral de Ségovia – Plaza Mayor – Bairro judeu – Calle Juan Bravo – Ávila.'
    },
    {
        day:'Dia 10 (Ávila - Serra da Estrela, Seia)',
        description:'Conhecer a cidade de Ávila com destino a Portugal até à Serra da estrela. Pontos de paragem: Ávila – Plaza del Mercado Grande – Catedral de Ávila – Muralhas de Ávila – Cuetro Postes – Serra da Estrela.'
    },
    {
        day:'Dia 11 (Serra da Estrela - Aveiro)',
        description:'Conhecer a Serra da estrela e terminar o dia em Aveiro. Pontos de paragem: Serra da Estrela – Nossa Senhora da boa Estrela – Torre da Serra da Estrela – Estância de Ski – Estrada para Manteigas – Miradouros – Lagoa Comprida – Sabugueiro – Manteigas – Seia – Museu do Pão - Aveiro.'
    },
    {
        day:'Dia 12 (Aveiro - Lisboa)',
        description:'Neste último dia da nossa tour damos a conhecer os pontos principais da cidade de Aveiro antes do regresso a Lisboa: Aveiro - Praça do Rossio - Ria de Aveiro - Moliceiros - Salinas - Costa Nova - Lisboa.'
    }
     

]
}

];
