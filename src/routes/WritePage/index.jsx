/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './write.module.scss'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AiFillEnvironment, AiFillFire, AiFillCloud, AiFillFile } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { dummyContents } from '../../dummyData'

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
  const { postId } = useParams()

  const dummy = dummyContents.filter((el) => `${el.id}` === `${postId}`)
  return (
    <div className={styles.showwrite}>
      <h4 className={styles.title}>{dummy[0].title}</h4>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td className={styles.td}>글쓴이</td>
            <td>{dummy[0].writer}</td>
          </tr>
          <tr>
            <td className={styles.td}>글 작성일</td>
            <td>{dummy[0].date}</td>
          </tr>
        </tbody>
      </Table>
      <Content />
    </div>
  )
}

function Content() {
  const [content, setcontent] = useState(['장소', '종목', '날짜', '친밀도'])
  const { postId } = useParams()
  const dummy = dummyContents.filter((el) => `${el.id}` === `${postId}`)
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
        <p>{dummy[0].place}</p>
      </div>
      <div className={styles.event}>
        <AiFillCloud className={styles.img} />
        <p>{content[1]}</p>
        <p>{dummy[0].event}</p>
      </div>
      <div className={styles.date}>
        <AiFillFile className={styles.img} />
        <p>{content[2]}</p>
        <p>{dummy[0].meetDate}</p>
      </div>
      <div className={styles.love}>
        <AiFillFire className={styles.img} />
        <p>{content[3]}</p>
        <p>{dummy[0].friendly}</p>
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
