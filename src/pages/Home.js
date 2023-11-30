import React, { Suspense, useMemo } from 'react';
import { Outlet, useLoaderData, Await } from 'react-router-dom';
import PortfoiloList from '../components/PortfoiloList';

const Home = () => {
    const { portfoilo } = useLoaderData();
    const memoizedPortfoiloList = useMemo(() => <PortfoiloList portfoilo={portfoilo} />, [portfoilo]);

    return (
        <>
            <div className="container-fluid">
                <div className="mt-4">
                    <h4 className="is-size-3 has-text-centered">Developer's portfoilo </h4>
                    <Suspense
                        fallback={
                            <p style={{ textAlign: 'center', fontSize: '40px', fontWeight: 'bolder' }}>
                                LOADING.....
                            </p>
                        }
                    >
                        <Await resolve={portfoilo}>{() => memoizedPortfoiloList}</Await>
                    </Suspense>
                </div>
            </div>
        </>
    );
};

async function loadportfollio() {
    const res = await fetch('http://localhost:8000/api/portfolios');
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || 'Could not fetch portfolios');
    }
    return data.data;
}

export async function portfolioloader() {
    return {
        portfoilo: await loadportfollio(),
    };
}

export default Home;