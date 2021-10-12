import React, {FC} from 'react';
import withAuth from './withAuth';

const Index : FC = () => {
    return (
        <div>Session </div>
    )
}
export default withAuth(Index);