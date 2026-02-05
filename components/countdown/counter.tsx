import { CSSProperties } from 'react';

interface CounterProps {
    count: number;
    digits?: number;
    textSingular: string;
    textPlural?: string;
    alwaysVisible?: boolean;
}

export default function Counter(props: CounterProps) {
    const {
        count,
        digits,
        textSingular,
        textPlural,
        alwaysVisible = false,
    } = props;

    const text: string = count == 1 || !textPlural ? textSingular : textPlural;
    const visible: boolean = alwaysVisible || count > 0;

    return (
        visible && (
            <div className="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
                <span className="countdown justify-center font-mono text-5xl">
                    <span
                        style={
                            {
                                '--value': count,
                                '--digits': digits,
                            } as CSSProperties
                        }
                        aria-live="polite"
                        aria-label={count.toString()}
                    >
                        {count}
                    </span>
                </span>
                {text}
            </div>
        )
    );
}
