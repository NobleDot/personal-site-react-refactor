import githubLogo from './github-mark-white.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/NobleDot">
                <img class="nav-item" id="gh-icon" src={githubLogo}></img>
            </a>
        </footer>
    )
}

export default Footer;