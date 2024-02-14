import { ReactElement } from 'react';

export default function ContactForm(): ReactElement {
    return (
        <form method="POST">
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Name</span>
                </div>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    name="full"
                    placeholder="Peter Muster"
                />
            </label>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">E-Mail</span>
                </div>
                <input
                    type="email"
                    className="input input-bordered w-full max-w-xs"
                    name="full"
                    placeholder="peter@muster.org"
                />
            </label>
            <label className="form-control">
                <div className="label">
                    <span className="label-text">Nachricht</span>
                </div>
                <textarea
                    className="textarea textarea-bordered h-24 bg-base-100"
                    name="msg"
                    placeholder="Hallo ..."
                ></textarea>
            </label>
            <button className="btn btn-primary btn-sm m-5">Senden</button>
        </form>
    );
}
