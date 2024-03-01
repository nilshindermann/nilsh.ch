'use client';

import CountdownEvent from '@/models/CountdownEvent';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

export default function EventSelect({
    events,
    current,
}: {
    events: Array<CountdownEvent>;
    current?: CountdownEvent;
}): ReactElement {
    const router = useRouter();

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-success m-1">
                Events
                <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-neutral p-2 shadow"
            >
                {events
                    .filter((e) => !current || e.slug !== current.slug)
                    .map((e) => (
                        <li key={e.slug}>
                            <a onClick={() => router.push(`./${e.slug}`)}>
                                {e.slug}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
