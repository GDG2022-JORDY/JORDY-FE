/* eslint-disable jsx-a11y/label-has-associated-control */
import './write.module.scss'
import Table from 'react-bootstrap/Table'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AiFillEnvironment, AiFillFire, AiFillCloud , AiFillFile} from 'react-icons/ai'

function Writepage() {
  const [num, setNum] = useState(0)
  return <div className='writepage'>
    {
      num === 1 ? <Showwrite /> : <Write />
    }
  </div>
}

function Showwrite() {
  return (
    <div className='showwirte'>
      <h4>~~</h4>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>글쓴이</td>
            <td>~~</td>
          </tr>
          <tr>
            <td>글 작성일</td>
            <td>~~</td>
          </tr>
        </tbody>
      </Table>
      <Content />
    </div>
  )
}

function Content() {
  const [content, setcontent] = useState(['장소', '종목', '날짜', '친밀도'])
  return (
    <div className='list'>
      <div className='place'>
        <AiFillEnvironment />
        <p>{content[0]}</p>
        <p>~~</p>
      </div>
      <div className='evnet'>
        <AiFillCloud />
        <p>{content[1]}</p>
        <p>~~</p>
      </div>
      <div className='date'>
        <AiFillFile />
        <p>{content[2]}</p>
        <p>~~</p>
      </div>
      <div className='love'>
        <AiFillFire />
        <p>{content[3]}</p>
        <p>~~~</p>
      </div>
    </div>
  )
}

function Write() {
  return (
    <div className='write'>
      <label>제목</label>
      <input type="text" />
      <select>
        <option>전체</option>
        <option>축구</option>
        <option>농구</option>
        <option>야구</option>
      </select>
      <label>만날장소</label>
      <input type="text" />
      <label>만날날짜</label>
      <input type="date" />
    </div>
  )
}

export default Writepage