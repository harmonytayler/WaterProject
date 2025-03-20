import { getFingerprint } from '@thumbmarkjs/thumbmarkjs';
import { useEffect, useState } from 'react';

export const Fingerprint = () => {
    const [fingerprint, setFingerprint] = useState<string | null>(null)

    useEffect(() => {
        getFingerprint().then((fingerprint) => {
            setFingerprint(fingerprint)
        })
    }, [])

    return (
        <div>
            <h1>Fingerprint</h1>
            <p>{fingerprint}</p>
        </div>
    )
}

export default Fingerprint