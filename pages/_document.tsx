import Document, { Html, Head, Main, NextScript } from 'next/document'

/*
  Head: solo importar cosas comunes como cdn para frameworks, fuentes,
        iconos, similares
  Html: solo para lang u algun otro atributo nada mas
  Main: si o si debe estar, no colocar nada, para eso ya esta body
  nextscript: si o si, no hacer nada
*/

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument