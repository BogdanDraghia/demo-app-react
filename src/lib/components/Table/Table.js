import {useState} from 'react'
import style from "./Table.module.css"
const Table = ({ data}) => {
    const [headElements] =useState(Object.keys(data.slice(1)[0]))
    console.log(headElements)
    return (
        <div className={style.TableContainer}>
            <table cellSpacing={0}>
                <thead>
                    <tr >
                        {
                            headElements.map((el, index) => {
                                return (<th key={index}>{el}</th>)
                            })
                        }
                    </tr>
                    <tr style={{ boxShadow: 'none', height: 15 }}>

                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => {
                        return (
                            <RowTable
                                key={index}
                                keyRow={row.id}
                                rowdata={row} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const RowTable = ({ rowdata}) => {
    return (
        <tr >
            {
                Object.entries(rowdata).map(([key, value]) => <td key={key}>{value}</td>)
            }
        </tr>)
}


export default Table