'use client';

import { useState, useEffect } from 'react';

export default function ClientDate({ dateString }: { dateString: string | Date }) {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        if (dateString) {
            setFormattedDate(new Date(dateString).toLocaleString());
        }
    }, [dateString]);

    return <>{formattedDate}</>;
}
