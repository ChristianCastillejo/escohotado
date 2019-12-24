import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Form from "../components/form"

function Contact() {
  const [isBioOpen, setIsBioOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="screen contact-container">
    <div className="form-container">
      <h1>{t("menu.contact")}</h1>
      <Form/>
      </div>
    <div className="home-bio">
      <h1>{t("home.bio")}</h1>
      <p>
        Antonio Escohotado Espinosa (Madrid, 5 de julio de 1941) es un
        filósofo, ensayista y profesor universitario español cuyas obras,
        si bien centradas principalmente en el derecho, la filosofía y la
        sociología, han abordado una gran variedad de campos. Obtuvo
        notoriedad pública por sus investigaciones acerca de las drogas, y
        son conocidas sus posiciones antiprohibicionistas. El leitmotiv de
        su obra es una afirmación de la libertad como antídoto frente al
        miedo o las coacciones que empujan al ser humano hacia toda clase
        de servidumbres.
      </p>
      <p>
        Escohotado declaró más de una vez "no tener otro estímulo que la
        autoaclaración, ni brújula distinta de averiguar cómo nace y acaba
        cada cosa" Así pues, su obra se ha desarrollado como un proceso de
        autoaprendizaje de la variedad de temas que aborda aplicando un
        método de análisis genealógico, un enfoque histórico que organiza
        la información cronológicamente y recela de las taxonomías.
      </p>
      {isBioOpen && (
        <>
          <p>
            Durante los años 60 se formó como jurista y filósofo en la
            corriente raciovitalista de Ortega y Gasset y de Zubiri
            influido por los conceptos de razón vital y razón histórica, a
            través de los cuales accedió al conocimiento de Freud y sobre
            todo de Hegel, cuya filosofía de la religión analizó en su
            tesis doctoral La conciencia infeliz (1972). Esta obra junto
            con Realidad y sustancia (1985) una incursión en el campo de
            la lógica y metafísica pura ponen los cimientos de una sólida
            base filosófica sobre la que se asienta el resto de su
            producción intelectual. Con De physis a polis (1975) se
            remontó además a los pensadores presocráticos, mientras que a
            la vez jugaba un papel protagonista en el surgimiento de la
            isla de Ibiza como foco contracultural en la España del final
            del franquismo y el despertar democrático, al fundar la
            discoteca Amnesia (1976). Con el paso de los años evolucionó
            de una mayor aplicación a lo abstracto en su juventud y
            primera madurez, hacia un interés creciente por los datos
            extraídos de la observación de la realidad más concreta,
            tomando la opción de "una ciencia observante, arrinconada hoy
            por su rama predictiva"
          </p>

          <p>
            Desde entonces y hasta hoy se consagra a estudiar y divulgar
            el origen y evolución de entidades humanas impersonales que
            representan la complejidad propiamente dicha, "que no son ni
            sujetos volitivos ni objetos inertes, sino seres de tercer
            tipo como el entendimiento humano, la familia o la economía
            política, resultado de concurrir ilimitadas acciones
            individuales en algún orden no planeado a priori" Este interés
            por la realidad como principio emancipador del simplismo sitúa
            la obra de Escohotado en el gozne entre la ontología y las
            ciencias del Hombre según la expresión de Hume: su perspectiva
            interdisciplinar combina una gran diversidad de saberes e
            intereses desde una posición humanística. Partiendo de la
            lógica y la metafísica, se interna en la epistemología y la
            teoría de la ciencia, para derivar después hacia fenómenos aún
            más propiamente humanos como la economía y el poder político,
            los mitos de género y las costumbres familiares y sexuales, o
            las modalidades de la ebriedad. El impulso común en todos
            estos campos es una afirmación de la libertad humana como
            antídoto frente al miedo, o a las imposiciones de autoridades
            ajenas a la responsabilidad personal
          </p>
          <p>
            A partir de la militancia en la clandestinidad durante el
            franquismo, sus posiciones políticas han ido evolucionando
            hasta llegar a definirse a sí mismo como "un liberal
            demócrata", mientras que en su obra maduraba la idea de que
            "cualquier utopía política acaba siendo indiscernible de uno u
            otro proyecto eugenésico, eufemismo para empresas genocidas"
            Políticamente es un pensador singular en el panorama español,
            y no siempre bien comprendido ya que no se inscribe en el
            tradicional eje izquierda/derecha, sino que se centra en la
            cuestión libertad/autoritarismo, rechazando el utopismo y el
            autoritarismo desde posiciones pragmáticas y racionalistas.
            Escohotado se convierte para sus coetáneos en historiador y
            analista de la actualidad, los usos sociales y la cultura
            durante la Transición a través de sus numerosos artículos
            publicados primero en El País y después en El Mundo y Diario
            16. Por ejemplo, aquellos crímenes de estado perpetrados por
            los GAL son desvelados ante la opinión pública por Escohotado
            en tribunas de opinión y ensayos sobre sociología del poder
            político como Majestades, crímenes y víctimas (1987), o El
            espíritu de la comedia, Premio Anagrama de Ensayo en 1992.
          </p>
          <p>
            Como autor del libro Historia general de las drogas (1989)
            alcanzó notoriedad pública en las últimas décadas del siglo XX
            por su defensa de posiciones antiprohibicionistas a través de
            artículos y apariciones en debates televisados. Practicó el
            bioensayo, probando, clasificando y describiendo los efectos
            físicos y subjetivos de más de treinta sustancias psicoactivas
            distintas para la redacción del manual de uso que tras
            diversas ediciones acabaría por titularse Aprendiendo de las
            drogas (1990-1995). Ha mantenido numerosas polémicas en los
            medios de comunicación por sus opiniones sobre temas delicados
            para la moral como el propio consumo de drogas, la
            prostitución o la eutanasia. Lo mismo que para sus seguidores
            significa independencia de criterio o cultivo del libre
            pensamiento, es considerado impertinencia intelectual por sus
            detractores, y en ocasiones ha provocado el rechazo de ciertos
            círculos académicos que le han acusado de intrusismo
            profesional, por ejemplo tras la publicación del manifiesto
            epistemológico aparecido como Caos y orden, Premio Espasa de
            Ensayo en 1999.
          </p>

          <p>
            Se puede afirmar que Escohotado es alguien sobre todo de ánimo
            reflexivo, aunque como se vislumbra en las ya mencionadas
            polémicas públicas, también es una persona de acción que,
            dejándose llevar a menudo por su temperamento, se ha visto
            expuesto a situaciones incómodas o de riesgo como durante su
            juvenil militancia izquierdista en la clandestinidad, su
            encarcelamiento por asuntos relacionados con drogas, o la
            persecución policial tras intervenciones televisivas de gran
            escándalo en Argentina, poco habituales entre los dedicados
            principalmente al estudio.
          </p>

          <p>
            En el plano profesional ha desarrollado una ingente tarea como
            traductor que abarca más de cuarenta títulos, entre otros las
            obras de Newton, Hobbes, Jefferson y Bakunin, ha divulgado
            especialmente la obra de Thomas Szasz y la de Ernst Jünger. Ha
            ejercido hasta su jubilación en 2013 como profesor de
            Filosofía y Metodología de las Ciencias Sociales en la
            Facultad de Ciencias Políticas y Sociología de la UNED. Hasta
            hace muy poco ha estado inmerso en el estudio de la historia
            del movimiento comunista con la redacción de Los enemigos del
            comercio. Una historia moral de la propiedad (2008-2014), una
            exhaustiva monografía que ya ha terminado con la publicación
            del tercer volumen. En 2019 se le concede el Premio Juan de
            Mariana por su defensa de la "libertad como respuesta a las
            coacciones que acaban sometiendo al individuo a todo tipo de
            esclavitudes"
          </p>
        </>
      )}
      <button onClick={() => setIsBioOpen(!isBioOpen)}>
        {isBioOpen ? t("home.closeBio") : t("home.openBio")}
      </button>
    </div>
    </div>
  );
}

export default Contact;
