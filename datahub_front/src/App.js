// App.js
import React from 'react';
import "./App.css";
import ERD from "./project/components/ERD";

// 테스트용 테이블 JSON 데이터
const tables = [
    {
        name: 'User',
        attributes: [
            { name: 'id', isPrimaryKey: true },
            { name: 'username' },
            { name: 'email' }
        ],
        x: 100, // 테이블의 x 좌표
        y: 100 // 테이블의 y 좌표
    },
    {
        name: 'Post',
        attributes: [
            { name: 'id', isPrimaryKey: true },
            { name: 'title' },
            { name: 'content' },
            { name: 'userId', isForeignKey: true }
        ],
        x: 300,
        y: 100
    },
    {
        name: 'Comment',
        attributes: [
            { name: 'id', isPrimaryKey: true },
            { name: 'content' },
            { name: 'postId', isForeignKey: true }
        ],
        x: 200,
        y: 300
    }
];

const relationships = [
    { from: 'User', to: 'Post' },
    { from: 'Post', to: 'Comment' },
    { from: 'User', to: 'Comment' }
];


function App() {
    return (
        <div className="app">
            <ERD tables={tables} relationships={relationships} />
        </div>
    );
}

export default App;
