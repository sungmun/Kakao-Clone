import React from 'react';
import Layout from 'layout/List';
import Profile from 'component/Profile';
import useRequest from 'event/hooks/useRequest';
import './App.scss';

import { connect } from 'react-redux';
const index = ({ token, history }) => {
    const [userRes, userLoading, userError] = useRequest(
        {
            method: 'get',
            url: '/user'
        },
        undefined,
        token
    );

    const [friendRes, friendLoading, friendError] = useRequest(
        {
            method: 'get',
            url: '/friend'
        },
        undefined,
        token
    );

    if (friendLoading || userLoading) {
        return <div>로딩중....</div>;
    }

    if (friendError || userError) {
        try {
            if (
                friendError.response.status === 403 ||
                userError.response.stateus === 403
            )
                history.push('/login');
        } catch (e) {
            console.log('-=-=-e-=-=-');
            console.log(e.response);
        }
        return <div>Error...</div>;
    }

    if (!friendRes || !userRes) return <div>Error...</div>;

    const { friend } = friendRes.data;
    const { profile } = userRes.data;

    return (
        <Layout>
            <ul className="List">
                <span className="Profile">내 프로필</span>
                <Profile image={profile.photos} nickName={profile.nickName} />
                <hr className="Line" />
                <span className="Profile">친구 {friend.length}</span>
                {friend.map((user, i) => {
                    return (
                        <Profile
                            image={user.photos}
                            nickName={user.nickName}
                            key={i}
                        />
                    );
                })}
            </ul>
        </Layout>
    );
};

const tokenProps = state => {
    return { token: state.token };
};

export default connect(tokenProps)(index);
