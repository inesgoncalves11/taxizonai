import Banner from "../../components/banner/banner";

import Faq from "../../components/faqs";

export default function Faqs() {
  const faq = [
    {
      question: "Quais os serviços fornecidos pela empresa?",
      answer:
        "Dispomos de vários serviços de transporte tais como: serviço de táxi disponível todos os dias em Lisboa, transfers personalizados dentro da área de Lisboa e arredores, tours turisticas em Lisboa, Sintra, Setubal, Fátima, Porto, Algarve e tours personalizadas. Para tours personalizadas basta entrar em contacto connosco via email ou telefone.",
    },
    {
      question: "Posso solicitar os vossos serviços para mais que um dia?",
      answer:
        "Sim,as nossas tours podem ser personalizadas para os dias que necessitar. Os custos associados ao alojamento não estão incluídos nos nossos serviços.",
    },
    {
      question:
        "Posso solicitar os vossos serviços para viagem de longa distância?",
      answer:
        "Sim fazemos viagens de longa distância em território nacional e Europa. Para mais informações e tours personalizadas pode entrar em contacto connosco via e-mail ou telefone.",
    },
    {
      question: "Qual a lotação máxima dos vossos veículos?",
      answer:
        "A empresa dispõe de veÍculos com lotação para 4, 6 e 8 passageiros (máximo).",
    },
    {
      question: "Os passeios incluem paragens para refeições?",
      answer:
        "Sim, os nossos passeios incluem paragens para refeições onde tentamos sugerir os melhores sitios para conhecer. As refeições não estão incluidas no valor do passeio.",
    },
    {
      question: "O que está incluido no valor do passeio?",
      answer:
        "No valor de cada tour estão incluidos todos os custos associados à viagem, internet gratuita e águas fornecidas pelo motorista. Todos os custos associados a refeições e visitas de monumentos/locais de interesse turistico não estão incluidos no valor da viagem",
    },
  ];

  return (
    <>
      <Banner title="FAQS" />
      <h2 className="faqs__headline">Perguntas frequentes</h2>
      <div className="faqs__container">
        {!!faq &&
          faq.map((item, i) => {
            return <Faq data={item} key={i} />;
          })}
      </div>
    </>
  );
}
