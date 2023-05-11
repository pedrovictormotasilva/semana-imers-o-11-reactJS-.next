import Head from 'next/head'
import Script from 'next/script'
export default function Page() {
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

      <section className="top" id="top">
        <div className="max-width">
          <div className="top-content">
            <div className="text-1">Construa seu futuro</div>
            <div className="text-2">com a melhor escola do estado!</div>
            <div className="text-3">Venha ser Adolfo Ferreira</div>
            <a href="#">Entrar em Contato</a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">Cursos</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fa-sharp fa-solid fa-user-nurse"></i>
                <div className="text">Enfermagem</div>
                <p>Aenean consectetur feugiat eros at aliquet. Integer ac nisi dui. Nam maximus nunc non aliquet aliquet.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code"></i>
                <i className="fa-solid fa-computer"></i>
                <div className="text">DS & Infor</div>
                <p>Aenean consectetur feugiat eros at aliquet. Integer ac nisi dui. Nam maximus nunc non aliquet aliquet.</p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <i className="fa-solid fa-money-bill-1-wave"></i>
                <div className="text">Administração</div>
                <p>Aenean consectetur feugiat eros at aliquet. Integer ac nisi dui. Nam maximus nunc non aliquet aliquet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contato</h2>
          <div className="contact-content">
            <div className="column left">
              <p>Aliquam facilisis vitae ante eu consequat. Nullam a mi vel metus tristique commodo id quis diam.</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Empresa</div>
                    <div className="sub-title">Adolfo Ferreira de Sousa</div>
                  </div>
                </div>

                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Endereço</div>
                    <div className="sub-title">Avenida Abolição</div>
                  </div>
                </div>

                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">E-mail</div>
                    <div className="sub-title">adolfoafsescola@gmail.com.br</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Mensagem de Contato</div>
              <form>
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Digite o nome" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Digite o e-mail" required />
                  </div>
                </div>

                <div className="field">
                  <input type="text" placeholder="Digite o assunto" required />
                </div>

                <div className="field textarea">
                  <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                </div>

                <div className="button-area">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>
          Create By <a href="#"> 2° Infor</a>
        </span>
      </footer>

      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
      <Script src="custom.js" strategy="afterInteractive" />
    </div>
  )
}
