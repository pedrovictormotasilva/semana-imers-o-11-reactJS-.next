import Head from 'next/head'
import Script from 'next/script'
import React from 'react'

export default function Page({ data }) {
  const [orcamento, setOrcamento] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  })

  const [response, setResponse] = useState({
    formSave: '',
    type: '',
    mensagem: '',
  })

  const onChangeInput = (e) => setOrcamento({ ...orcamento, [e.target.name]: e.target.value })

  const sendOrcamento = async (e) => {
    e.preventDefault()

    setResponse({ formSave: true })
    try {
      const res = await fetch('http://localhost:3000/cadastrar-orcamento', {
        method: 'POST',
        body: JSON.stringify(orcamento),
        headers: { 'Content-Type': 'application/json' },
      })

      const responseEnv = await res.json()

      if (responseEnv.erro) {
        setReponse({
          formSave: false,
          type: 'error',
          mensagem: responseEnv.mensagem,
        })
      } else {
        setReponse({
          formSave: false,
          type: 'success',
          mensagem: responseEnv.mensagem,
        })
      }
    } catch (err) {
      setReponse({
        formSave: false,
        type: 'error',
        mensagem: 'Erro: Orçamento não enviado com sucesso!',
      })
    }
  }
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Celke - Layout Imersao 11</title>
      </Head>

      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#top">AFS</a>
          </div>
          <ul className="menu">
            <li>
              <a href="#top" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="menu-btn">
                Serviços
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contato
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      <section className=" img-top top" id="top">
        <style>
          {`.img-top {
            background: url(` +
            data.url +
            data.datahome.image_top +
            `);
            background-repeat: no-repeat;
            background-position: center;
          }`}
        </style>
        <div className="max-width">
          <div className="top-content">
            <div className="text-1">{data.datahome.title_top_one}</div>
            <div className="text-2">{data.datahome.title_top_one}</div>
            <div className="text-3">{data.datahome.title_top_one}</div>
            <a href="#">{data.datahome.btn_title_top}</a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">{data.datahome.ser_title}</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className={data.datahome.ser_icon_one}></i>
                <div className="text">{data.datahome.ser_title_one}</div>
                <p>{data.datahome.ser_desc_one}</p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <i className={data.datahome.ser_icon_two}></i>
                <div className="text">{data.datahome.ser_title_two}</div>
                <p>{data.datahome.ser_desc_two}</p>
              </div>
            </div>

            <div className="card">
              <div className="card">
                <div className="box">
                  <i className={data.datahome.ser_icon_three}></i>
                  <div className="text">{data.datahome.ser_title_three}</div>
                  <p>{data.datahome.ser_desc_three}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">{data.datahome.cont_title}</h2>
          <div className="contact-content">
            <div className="column left">
              <p>{data.datahome.cont_desc}</p>
              <div className="icons">
                <div className="row">
                  <i className={data.datahome.cont_icon_emp}></i>
                  <div className="info">
                    <div className="head">{data.datahome.cont_title_emp}</div>
                    <div className="sub-title">{data.datahome.cont_name_emp}</div>
                  </div>
                </div>

                <div className="row">
                  <i className={data.datahome.cont_icon_end}></i>
                  <div className="info">
                    <div className="head">{data.datahome.cont_title_end}</div>
                    <div className="sub-title">{data.datahome.cont_name_end}</div>
                  </div>
                </div>

                <div className="row">
                  <i className={data.datahome.cont_icon_email}></i>
                  <div className="info">
                    <div className="head">{data.datahome.cont_title_email}</div>
                    <div className="sub-title">{data.datahome.cont_name_email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">{data.datahome.cont_title_form}</div>

              {response.type === 'error' ? <p className="alert-danger"> response.mensagem</p> : ''}
              {response.type === 'success' ? <p className="alert-success "> response.mensagem</p> : ''}

              <form onSubmit={sendOrcamento}>
                <div className="fields">
                  <div className="field name">
                    <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} required />
                  </div>
                  <div className="field email">
                    <input type="email" name="email" placeholder="Digite o e-mail" onChange={onChangeInput} required />
                  </div>
                </div>

                <div className="field">
                  <input type="text" name="subject" placeholder="Digite o assunto" onChange={onChangeInput} required />
                </div>

                <div className="field textarea">
                  <textarea name="content" cols="30" rows="10" placeholder="Digite o conteúdo" onChange={onChangeInput} required></textarea>
                </div>

                <div className="button-area">
                  {response.formSave ? (
                    'salvando'
                  ) : (
                    <button type="submit" disabled>
                      Enviar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>
          {data.datahome.footer_desc} <a href={data.datahome.footer_link}>{data.datahome.footer_name}</a>
        </span>
      </footer>

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      <Script src="custom.js" strategy="afterInteractive" />
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/`)
  const data = await response.json()
  return { props: { data } }
}
