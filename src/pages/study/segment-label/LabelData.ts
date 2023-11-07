import React, { useRef, useState } from 'react';
export interface ILabel {
    id: number;
    name: string;
    description: string;
    color: string
}


export const labelSamples: ILabel[] = [
    {
        id: 0, // Used in JSX as a key
        name: '견적요청',
        description: '견적요청 리스트(사용자 지정)',
        color: '#8df578a7'
    }, {
        id: 1, // Used in JSX as a key
        name: '미구매',
        description: '견적 받은 후 구매 안한 리스트',
        color: '#000000'
    }, {
        id: 2, // Used in JSX as a key
        name: '연락보류',
        description: '직접 전화 주기로 한 업체',
        color: '#EB2F96'
    }, {
        id: 3, // Used in JSX as a key
        name: '입금대기',
        description: '입금 전 업체',
        color: 'fadb14'
    }, {
        id: 4, // Used in JSX as a key
        name: 'Audit',
        description: '감사 건으로 안내받은 리스트',
        color: '#f5222d'
    }, {
        id: 5, // Used in JSX as a key
        name: '요청사항',
        description: '요구사항 있는 업체',
        color: '#13a8a8'
    },
];


