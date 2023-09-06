import Banner from "../../components/banner/banner";

import styles from "./styles.module.css";

import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Banner title="Tour personalizada " />
      <div className={styles.container}>
        <h3 className={styles.title}>
          Escolha todos os detalhes da sua viagem e nós tratamos do resto
        </h3>

        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.container__left}>
            <label htmlFor="name" className={styles.labels}>
              Nome completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input__text}
              onChange={formik.handleChange}
              value={formik.values.text}
            />

            <label htmlFor="email" className={styles.labels}>
              O seu e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input__text}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label htmlFor="tel" className={styles.labels}>
              Telefone
            </label>
            <input
              id="tel"
              name="tel"
              type="tel"
              maxLength={9}
              className={styles.input__tel}
              onChange={formik.handleChange}
              value={formik.values.tel}
            />
            <br />
            <div className={styles.container__web}>
              <label htmlFor="consent" className={styles.labelcheckbox}>
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className={styles.input__checkbox}
                  onChange={formik.handleChange}
                  value={formik.values.checkbox}
                />
                Aceito as condições e pretendo ser contactado
              </label>
              <br />
              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </div>
          </div>
          <div className={styles.container__right}>
            <div className={styles.container__inputs}>
              <div className={styles.container_date}>
                <label htmlFor="date" className={styles.labels}>
                  Escolha uma data
                </label>
                <input
                  type="date"
                  id="city1"
                  name="date"
                  value="date"
                  className={styles.input__date}
                />
              </div>
              <div className={styles.container_passenger}>
                <label htmlFor="passageiros" className={styles.labels}>
                  Nº de passageiros
                </label>
                <input
                  id="passageiros"
                  name="passageiros"
                  type="number"
                  min={0}
                  max={8}
                  className={styles.input__passenger}
                  onChange={formik.handleChange}
                  value={formik.values.passageiros}
                />
              </div>
              <div className={styles.container_days}>
                <label htmlFor="days" className={styles.labels}>
                  Nº de dias
                </label>
                <input
                  id="days"
                  name="days"
                  type="number"
                  min={0}
                  className={styles.input__days}
                  onChange={formik.handleChange}
                  value={formik.values.days}
                />
              </div>
            </div>
            <br />
            <label htmlFor="options" className={styles.labels}>
              Escolha os locais que pretende visitar:
              <div className={styles.options}>
                <div className={styles.option}>
                  <input
                    id="list1"
                    type="checkbox"
                    className={styles.checkboxitem}
                    name="list"
                    value="Valor 1"
                  />
                  <label for="list1" className={styles.label__check}>
                    Lisboa
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list2"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 2"
                  />
                  <label for="list2" className={styles.label__check}>
                    Évora
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list3"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 3"
                  />
                  <label for="list3" className={styles.label__check}>
                    Coimbra
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list4"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 4"
                  />
                  <label for="list4" className={styles.label__check}>
                    Fátima
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list5"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 5"
                  />
                  <label for="list5" className={styles.label__check}>
                    Porto
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list6"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 6"
                  />
                  <label for="list6" className={styles.label__check}>
                    Algarve
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list7"
                    type="checkbox"
                    className={styles.checkboxitem}
                    name="list"
                    value="Valor 7"
                  />
                  <label for="list7" className={styles.label__check}>
                    Viseu
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list8"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 8"
                  />
                  <label for="list8" className={styles.label__check}>
                    Guarda
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list9"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 9"
                  />
                  <label for="list9" className={styles.label__check}>
                    Setúbal
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list10"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 10"
                  />
                  <label for="list10" className={styles.label__check}>
                    Aveiro
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list11"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 11"
                  />
                  <label for="list11" className={styles.label__check}>
                    Braga
                  </label>
                </div>
                <div className={styles.option}>
                  <input
                    id="list12"
                    className={styles.checkboxitem}
                    type="checkbox"
                    name="list"
                    value="Valor 12"
                  />
                  <label for="list12" className={styles.label__check}>
                    Leiria
                  </label>
                </div>
              </div>
            </label>
            <br />
            <textarea
              id="textarea"
              name="textarea"
              placeholder="Deixe uma mensagem com detalhes adicionais..."
              className={styles.textarea}
              onChange={formik.handleChange}
              value={formik.values.textarea}
            ></textarea>
            <div className={styles.container__mobile}>
              <label htmlFor="consent" className={styles.labelcheckbox}>
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className={styles.input__checkbox}
                  onChange={formik.handleChange}
                  value={formik.values.checkbox}
                />
                Aceito as condições e pretendo ser contactado.
              </label>
              <br />
              <button type="submit" className={styles.button}>
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default SignupForm;
