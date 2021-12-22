import './Style.css'

const Logo = ({ href, src, alt }) => (
    <>
        <a href={href}>
            <div className="icons">
                <img src={src} alt={alt} />
            </div>
        </a>
    </>
)

export default Logo;