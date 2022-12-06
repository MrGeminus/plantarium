import { Link, useLocation } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumbs = () => {
    const location = useLocation()
    const crumbs = location.pathname.split('/').map((crumb, index) => {
        return (
            <Breadcrumb.Item linkAs={Link} href={'/' + crumb}>{index === 0 ? 'home' : crumb}</Breadcrumb.Item>
        )
    }
    )
    return (
        <Breadcrumb>
            {crumbs}
        </Breadcrumb>
    );
}

export default Breadcrumbs;