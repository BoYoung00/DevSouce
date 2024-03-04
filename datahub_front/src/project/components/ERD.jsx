// ERD.js
import React from 'react';
import "./ERD.css";

const ERD = ({ tables, relationships }) => {
    // 테이블과 속성을 나타내는 박스를 생성합니다.
    const drawTables = () => {
        return tables.map((table, index) => (
            <div key={index} className="table" style={{ left: table.x, top: table.y }}>
                <h2>{table.name}</h2>
                <ul>
                    {table.attributes.map((attribute, index) => (
                        <li key={index}>{attribute.name} {attribute.isPrimaryKey ? '(PK)' : attribute.isForeignKey ? '(FK)' : ''}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    // 테이블 간의 관계를 나타내는 선을 생성합니다.
    const drawRelationships = () => {
        // 선의 스타일을 정의합니다.
        const lineStyle = {
            stroke: '#000',
            strokeWidth: 2
        };

        // 각 테이블 간의 관계에 대한 선을 생성합니다.
        const lines = [];
        relationships.forEach((relationship, index) => {
            const fromTable = tables.find(item => item.name === relationship.from);
            const toTable = tables.find(item => item.name === relationship.to);
            if (fromTable && toTable) {
                const x1 = fromTable.x + 100; // 시작점 x 좌표
                const y1 = fromTable.y + 50; // 시작점 y 좌표
                const x2 = toTable.x; // 끝점 x 좌표
                const y2 = toTable.y + 50; // 끝점 y 좌표
                lines.push(
                    <line key={`line-${index}`} x1={x1} y1={y1} x2={x2} y2={y2} style={lineStyle} />
                );
            }
        });
        return lines;
    };

    return (
        <div className="erd">
            <h1>Entity-Relationship Diagram</h1>
            <div className="tables">
                {drawTables()}
            </div>
            <svg className="relationships" width="500" height="500" style={{ position: 'absolute' }}>
                {drawRelationships()}
            </svg>
        </div>
    );
};

export default ERD;
