import "./Footer.css"

const Footer = () => 
{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/jaime.hurtado.731/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://twitter.com/JaimeArb19/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.instagram.com/jimmy021h//'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Jaime Hurtado</strong>
    </footer>
}

export default Footer