interface Props {
    type?: 'primary' | 'secondary' | 'info' | 'danger' | 'success' | 'light' | 'warning'
    children: React.ReactNode | React.ReactNode[]
}

const Alert = ({ type = 'danger', children }: Props): JSX.Element => {
    return (
        <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert