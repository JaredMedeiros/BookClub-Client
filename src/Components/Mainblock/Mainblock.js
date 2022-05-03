import './Mainblock.scss'

export default function Mainblock() {
    return(
    <main className = 'mainblock'>
        <section className = 'mainblock__top'>
            <div className = 'mainblock__tabs'>
                <ul>
                    <a><li><i>work, </i></li></a>
                    <a><li>contact</li></a>
                </ul>
            </div>
            <div className = 'mainblock__info'>
                <div className = 'mainblock__blurb'>
                    <p>BOOKCLUB.studio is a web and software development collective with a focus on bold, simplistic UI, and accessible, scalable architecture. Creative + intuitive execution from ideation to launch.</p>
                </div>
                <div className = 'mainblock__contact'>
                    <p>Inquiries:<br/>bookclubstudio@gmail.com</p>
                    <p>Conversation:<br/>469.400.8422</p>
                </div>
            </div>
        </section>
        <section className = 'mainblock__bottom'>
            <h1 className = 'mainblock__title'>BOOKCLUB<br/>.studio</h1>
        </section>
    </main>
    )
}