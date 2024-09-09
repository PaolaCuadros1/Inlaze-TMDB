import styles from "./Nav.module.css"
import QuickbetLogo from "@/components/Images/QuickbetLogo"
import UserImage from "@/components/Images/UserImage"
import Link from "next/link"

const Nav = (): JSX.Element => {
    return (
        <nav className={`navbar ${styles.navbar}`}>
            <div className={`container-fluid ${styles.container}`}>
                <Link className="navbar-brand" href='/'>
                    <QuickbetLogo />
                </Link>
                <div className="d-flex justify-content-between align-items-center flex-md-grow-1">
                    <ul className={`d-none d-md-flex align-items-center ${styles.inlineMenu}`}>
                        <li>
                            <Link href="/">Popular</Link>
                        </li>
                        <li>
                            <Link href="/">Favorites</Link>
                        </li>
                    </ul>

                    <UserImage />

                    <button className="navbar-toggler d-block d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="mainNavbar">
                    <div className="navbar-nav text-end">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Popular</a>
                        <a className="nav-link" href="#">Favorites</a>
                        <a className="nav-link">Sign Out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
