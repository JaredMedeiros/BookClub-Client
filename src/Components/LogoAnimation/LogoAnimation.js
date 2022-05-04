import './LogoAnimation.scss'

export default function LogoAnimation() {
    return (
        <main className = 'container'>
            <video id = 'video' loop autoPlay muted>
                <source src = '/Video.mp4' />
            </video>
        </main>
    )
}