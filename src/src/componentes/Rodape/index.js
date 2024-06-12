import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='footer'>
            <section className='footer-redes'>
                <a href="https://fb.com/tsilfidis" target='_blank'><img src="./imagens/fb.png" alt='logo Facebook'/></a>
                <a href="https://twitter.com/tsilfidis" target='_blank'><img src="./imagens/tw.png" alt='logo Twitter'/></a>
                <a href="https://instagram.com/tsilfidis" target='_blank'><img src="./imagens/ig.png" alt='logo Instagram'/></a>
            </section>
            <section>
                <img src="./imagens/logo.png" alt='logo organo'/>
            </section>
            <section>
                <p>Desenvolvido por Paná Tsilfidis</p>
            </section>
        </footer>
    )
}

export default Rodape;