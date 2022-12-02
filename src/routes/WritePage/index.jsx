/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from "./write.module.scss"
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AiFillEnvironment, AiFillFire, AiFillCloud, AiFillFile } from 'react-icons/ai'

function Writepage() {
  const [num, setNum] = useState(0)
  return (
    <div className={styles.writepage}>
      {/* {
        num === 1 ? <Showwrite /> : <Write />
      } */}
      <Showwrite />
      <Write />
    </div>
  )
}

function Showwrite() {
  return (
    <div className={styles.showwrite}>
      <h4 className={styles.title}>~~</h4>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td className={styles.td}>글쓴이</td>
            <td>~~</td>
          </tr>
          <tr>
            <td className={styles.td}>글 작성일</td>
            <td>~~</td>
          </tr>
        </tbody>
      </Table>
      <Content />
    </div>
  )
}

function Content()  {
  const [content, setcontent] = useState(['장소', '종목', '날짜', '친밀도'])
  return (
    <div
      className={styles.list}
      onChange={() => {
        setNum(1)
      }}
    >
      <div className={styles.place}>
        <AiFillEnvironment className={styles.img} />
        <p>{content[0]}</p>
        <p>~~</p>
      </div>
      <div className={styles.event}>
        <AiFillCloud className={styles.img} />
        <p>{content[1]}</p>
        <p>~~</p>
      </div>
      <div className={styles.date}>
        <AiFillFile className={styles.img} />
        <p>{content[2]}</p>
        <p>~~</p>
      </div>
      <div className={styles.love}>
        <AiFillFire className={styles.img} />
        <p>{content[3]}</p>
        <p>~~~</p>
      </div>
    </div>
  )
}

function Write() {
  return (
    <div
      className={styles.write}
      onChange={() => {
        setNum(0)
      }}
    >
      <label>제목</label>
      <input type='text' className={styles.input} />
      <select>
        <option>전체</option>
        <option>축구</option>
        <option>농구</option>
        <option>야구</option>
      </select>
      <label>만날장소</label>
      <input type='text' className={styles.input} />
      <label>만날날짜</label>
      <input type='date' className={styles.input} />
    </div>
  )
}

export default Writepage
