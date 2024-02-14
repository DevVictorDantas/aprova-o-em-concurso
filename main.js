const perguntas = [
    {
      pergunta:
        "Qual é o principal nutriente energético encontrado em alimentos como arroz, pão e massas?",
      respostas: ["Proteínas", "Gorduras", "Carboidratos", "Fibras"],
      correta: 2
    },
    {
      pergunta:
        'Qual é a vitamina conhecida como "vitamina da luz solar", essencial para a absorção de cálcio e fósforo?',
      respostas: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
      correta: 2
    },
    {
      pergunta: "Quais são os nutrientes considerados macronutrientes?",
      respostas: [
        "Vitaminas e minerais",
        "Proteínas e gorduras",
        "Carboidratos e fibras",
        "Água e fibras"
      ],
      correta: 1
    },
    {
      pergunta:
        "Qual é o nutriente que fornece a maior quantidade de calorias por grama?",
      respostas: ["Proteínas", "Carboidratos", "Gorduras", "Fibras"],
      correta: 2
    },
    {
      pergunta:
        "Qual é o nome dado à proteína de origem vegetal que contém todos os aminoácidos essenciais?",
      respostas: ["Caseína", "Albumina", "Soy protein", "Proteína completa"],
      correta: 2
    },
    {
      pergunta: "Qual é a principal função do potássio no organismo?",
      respostas: [
        "Formação de ossos e dentes",
        "Transporte de oxigênio no sangue",
        "Regulação da pressão arterial e contração muscular",
        "Produção de energia"
      ],
      correta: 2
    },
    {
      pergunta:
        "Qual é o principal tipo de lipídio encontrado em alimentos como óleo de oliva, abacate e nozes?",
      respostas: [
        "Colesterol",
        "Ácidos graxos saturados",
        "Ácidos graxos trans",
        "Ácidos graxos monoinsaturados"
      ],
      correta: 3
    },
    {
      pergunta:
        "Quais são os grupos alimentares que compõem a pirâmide alimentar?",
      respostas: [
        "Carnes, frutas, laticínios, leguminosas, gorduras",
        "Cereais, legumes, verduras, frutas, óleos",
        "Carnes, cereais, laticínios, gorduras, doces",
        "Carnes, legumes, frutas, laticínios, gorduras"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal função dos antioxidantes no organismo?",
      respostas: [
        "Regular a pressão arterial",
        "Prevenir a formação de radicais livres e proteger as células do corpo",
        "Ajudar na digestão de alimentos gordurosos",
        "Aumentar a produção de colesterol bom"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a principal fonte alimentar de vitamina C?",
      respostas: [
        "Leite e derivados",
        "Carnes vermelhas",
        "Frutas cítricas",
        "Vegetais folhosos"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome dado à medida de energia contida nos alimentos?",
      respostas: ["Gramas", "Calorias", "Mililitros", "Unidades"],
      correta: 1
    },
    {
      pergunta:
        "Qual é o nome dado à inflamação crônica do intestino delgado causada pela ingestão de glúten em pessoas predispostas?",
      respostas: [
        "Intolerância à lactose",
        "Doença de Crohn",
        "Diverticulite",
        "Doença celíaca"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nutriente mais abundante no corpo humano?",
      respostas: ["Água", "Cálcio", "Ferro", "Sódio"],
      correta: 0
    },
    {
      pergunta: "Qual é a principal função das fibras alimentares no organismo?",
      respostas: [
        "Fornecer energia rápida",
        "Promover a absorção de gorduras",
        "Auxiliar no bom funcionamento intestinal",
        "Estabilizar os níveis de açúcar no sangue"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a principal função do cálcio no organismo?",
      respostas: [
        "Produção de energia",
        "Coagulação sanguínea",
        "Contração muscular e formação de ossos e dentes",
        "Absorção de gorduras"
      ],
      correta: 2
    },
    {
      pergunta:
        "Qual é a recomendação geral para a ingestão diária de água para um adulto saudável?",
      respostas: ["1 litro", "2 litros", "3 litros", "4 litros"],
      correta: 1
    },
    {
      pergunta:
        "Qual é o nome dado à condição caracterizada pelo excesso de gordura corporal?",
      respostas: ["Obesidade", "Desnutrição", "Anorexia", "Diabetes"],
      correta: 0
    },
    {
      pergunta:
        "Qual é o nome dado ao processo de transformação dos alimentos em nutrientes que podem ser absorvidos pelo corpo?",
      respostas: ["Digestão", "Assimilação", "Metabolismo", "Absorção"],
      correta: 0
    },
    {
      pergunta:
        "Qual é a recomendação geral para o consumo diário de frutas e vegetais?",
      respostas: ["1 porção", "2 porções", "3 porções", "5 porções"],
      correta: 3
    },
    {
      pergunta:
        "Qual é o principal tipo de gordura presente em alimentos como manteiga, queijos e carnes gordurosas?",
      respostas: [
        "Ácidos graxos saturados",
        "Ácidos graxos monoinsaturados",
        "Ácidos graxos poli-insaturados",
        "Ácidos graxos trans"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a principal fonte alimentar de ferro?",
      respostas: [
        "Carnes vermelhas",
        "Leite e derivados",
        "Frutas cítricas",
        "Vegetais folhosos verde-escuros"
      ],
      correta: 0
    }
  ]
  
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
  
  //loop / repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true) //cloneNode é uma função que clona o "nó" referente ao conteúdo do template. O True é um dado booleano que passado pra essa função vai permitir clonar todos os Nodes lá de dentro
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta
      dt.querySelector("input").setAttribute(
        "name",
        "pergunta-" + perguntas.indexOf(item)
      )
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
  
      dt.querySelector("input").onchange = function (event) {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
      }
  
      quizItem.querySelector("dl").appendChild(dt)
    }
  
    quizItem.querySelector("dl dt").remove()
    quizItem.querySelector("h3").textContent = item.pergunta
    quiz.appendChild(quizItem) // appendChild() é um metodo que adiciona um "filho" ao "nó" especificado. Nesse caso ele pega e coloca a pergunta na tela.
  }
  