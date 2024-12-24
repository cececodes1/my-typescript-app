import React from 'react';
import { filterNumbers } from '../utils/arrayUtils';

const EvenNumbers: React.FC = () => {
    const numbers: number[] = [1, 2, 3, 4, 5, 6];
    const evenNumbers = filterNumbers(numbers);

    return (
        <div>
            <h2>Even Numbers</h2>
            <ul>
                {evenNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default EvenNumbers;
